const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

// Controllers
const IC = require('./controllers/controller')
const AuthCtrl = require('./controllers/auth_controller')

const app = express()

//Bring variables off of process.env
const { SERVER_PORT, CONNECTION_STRING } = process.env

//DB Connection
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected!')
})

//Setup Sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))

app.use(bodyParser.json())

// API Endpoints

// Authentication Enpoints
app.get("/auth/callback", AuthCtrl.auth)

app.get("/api/currentUser", (req, res) => {
    // console.log(req.session.user)
    res.send(req.session.user)
})

app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.status(200).redirect('/')
})

// Incident Data Endpoints
app.get('/api/incidents', IC.getIncidents)
app.post('/api/incidents/new', IC.newIncident)
app.put('/api/incidents/:id', IC.updateIncident)
app.delete('/api/incidents/:id', IC.deleteIncident)

app.listen(SERVER_PORT, () => {
    console.log("listening on port:", SERVER_PORT)
})
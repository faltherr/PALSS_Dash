const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const IC = require('./controllers/controller')
require('dotenv').config()

const app = express()

//Bring variables off of process.env
const {SERVER_PORT, CONNECTION_STRING} = process.env

//DB Connection
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected!')
  })

app.use(bodyParser.json())

//API Endpoints
app.get('/api/incidents', IC.getIncidents)

app.listen(SERVER_PORT, ()=>{
    console.log("listening on port:", SERVER_PORT)
})
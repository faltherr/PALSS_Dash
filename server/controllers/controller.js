module.exports = {
    getIncidents: (req, res) => {
            let db = req.app.get('db')
            // console.log(db)
            db.get_incidents()
            .then(response => res.status(200).send(response))
            // .catch (err => {
            // res.status(500).send({erorMessage: "Error fetching data"})
            // console.log(err)
        },
    newIncident: (req, res) => {
        let db = req.app.get('db')
        let {eventdate, tabldg, jobtitle, factors1, factors2, bodyparts, description} = req.body
        let newEvent = {eventdate, tabldg, jobtitle, factors1, factors2, bodyparts, description}
        let events = db.create_incident(newEvent)
        let event = events[0]
        res.status(200).send(event)
    },
    updateIncident: (req, res) => {
        let db = req.app.get('db')
        const {id} = req.params
        const {Description} = req.body
        db.update_incident([Description, id]).then(response =>{
            res.status(200).send(response)
        })
    },
    deleteIncident: (req,res) => {
        let db = req.app.get('db')
        const {id} = req.params
        db.delete_incident(id).then(response => {
            res.status(200).send(response)
        })
    }
}
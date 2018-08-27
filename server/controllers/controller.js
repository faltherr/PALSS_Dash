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
        let {eventdate, tabldg, jobtitle, factors1, bodyparts, description} = req.body
        let newEvent = {eventdate, tabldg, jobtitle, factors1, bodyparts, description}
        let events = db.create_incident(newEvent).then(events =>{
            res.status(200).send(events)
        })
    },
    updateIncident: (req, res) => {
        let db = req.app.get('db')
        const {id} = req.params
        const {TABuilding, JobTitle, Factors1, BodyParts, Description} = req.body
        db.update_incident([TABuilding, JobTitle, Factors1, BodyParts, Description, id]).then(response =>{
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
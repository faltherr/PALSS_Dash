module.exports = {
    getIncidents: (req, res) => {
            let db = req.app.get('db')
            var filterDecision
            // console.log(db)
            if(req.query.months) {
                let months = decodeURI(req.query.months)
                if(months === 'allTime') {
                    filterDecision = db.get_all_time_incidents()
                } else {
                    filterDecision = db.get_incidents_by_time({months})
                }
            } else {
                filterDecision = db.get_incidents()
            }
            filterDecision.then(response => res.status(200).send(response))
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
module.exports = {
    getIncidents: async (req, res) => {
        try{
            let db = req.app.get('db')
            // console.log(db)
            let incidents = await db.get_incidents()
            // console.log(incidents)
            res.status(200).send(incidents)
        } catch (error) {
            console.log("Error fetching posts", error)
            res.status(500).send(error)
        }
    },
    newIncident: (req, res) => {
        let db = req.app.get('db')
        let {eventdate, tabldg, jobtitle, factors1, factors2, bodyparts, description} = req.body
        let newEvent = {eventdate, tabldg, jobtitle, factors1, factors2, bodyparts, description}
        let events = db.create_incident(newEvent)
        let event = events[0]
        res.status(200).send(event)
    }
}
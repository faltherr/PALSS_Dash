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
    }
}
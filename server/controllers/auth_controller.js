const axios = require('axios')

module.exports = {
    auth: async (req, res) => {
        try {
            //code comes from auth0
            let { code } = req.query
            // console.log(req.headers.host)

            //The object we are bundling to request a token
            let payload = {
                client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                code: code,
                grant_type: "authorization_code",
                redirect_uri: `http://${req.headers.host}/auth/callback`
            }
            let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`

            // Send to auth0 for an access token
            let accessTokenResponse = await axios.post(`${auth0domain}/oauth/token`, payload)
            //Auth0 gives us an access token
            let accessToken = accessTokenResponse.data.access_token
            //send acess token back to auth0
            let userInfoResponse = await axios.get(`${auth0domain}/userinfo?access_token=${accessToken}`)
            //Auth0 sends back the user info
            let userInfo = userInfoResponse.data

            //If user exists then add them to session if not create them and add them to the session
            
            let db = req.app.get('db')

            let users = await db.findUserById(userInfo.sub)
            console.log(users)

            if (users.length){
                req.session.user = users[0]
                res.redirect('/Dashboard')
            } else {
                let users = await db.create_user(userInfo)
                req.session.user = users[0]
                res.redirect('/Dashboard')
            }

        } catch (error) {
            console.log("We have a problem... ", error)
            res.redirect('/error')
        }

    }
}
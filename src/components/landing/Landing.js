import React, { Component } from 'react'
// import logo from '../../../public/logo_transparent.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class LandingPage extends Component {

    login = () => {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        //The code from auth0 comes from here
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    
        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
    
        //Window.location takes the wraped url location and sends us to the new location 
        window.location = location
      }

    render() {
        return (
            <div className="landing-page-main-container">
                <div className="landing-page-logo-container">
                    <img src={process.env.PUBLIC_URL + '/logo_transparent.png'} alt="logo" className="logo" />
                </div>
                <div className="landing-page-text-container">
                    <div>
                        <h1 className="landing-page-app-title"> PALSS Dash </h1>
                    </div>
                    <hr className='landing-hr'/>
                    <div>
                        <h4 className="landing-page-acronym"> Predictive Analytics for Laboratory Safety and Security </h4>
                    </div>
                </div>
                <div className="landing-page-button-container">
                    <Link to ='/Dashboard'>
                    <button class="btn btn-light" > Dashboard </button>
                    </Link>
                    <Link to ='/'>
                    <button class="btn btn-light" onClick={this.login}> Login </button>
                    </Link>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        user_data: state.reducer.user_data
    }
}

export default connect(mapStateToProps)(LandingPage)
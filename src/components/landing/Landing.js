import React, { Component } from 'react'
// import logo from '../../../public/logo_transparent.png'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
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
                    <hr />
                    <div>
                        <h4 className="landing-page-acronym"> Predictive Analytics for Laboratory Safety and Security </h4>
                    </div>
                </div>
                <div className="landing-page-button-container">
                    <Link to ='/Dashboard'>
                    <button> Dashboard </button>
                    </Link>
                    <Link to ='/'>
                    <button> Admin Login </button>
                    </Link>
                </div>
            </div>
        )
    }
}
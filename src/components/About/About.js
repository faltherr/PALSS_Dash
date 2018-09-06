import React from 'react'
import { Link } from 'react-router-dom'
import WeatherForecast from '../dashboard/Forecast'
import {connect} from 'react-redux'
import { logout } from '../../Actions/authentication'


let About = props => {

    return (
        <div className="main-about-container">
            <div className='dashboard-header'>
                <div className="dashboard-header-link-container">
                    <div> <img src={process.env.PUBLIC_URL + '/logo_transparent.png'} alt="logo" className="logo-mini" /> </div>
                    <Link to='/'> <h4 className="header-link-text"> Login </h4> </Link>
                    <Link to='/Dashboard'> <h4 className="header-link-text"> Dashboard </h4> </Link>
                    <h4 className="header-link-text about"> About </h4>
                </div>
                <div className='forecast-container'>
                        <WeatherForecast />
                    </div>
                    <div className='dashboard-button-container'>
                        {
                            //If the user is logged in and they are an admin then we allow them to have admin privelleges to full CRUD
                            props.user_data
                                ?
                                props.user_data.admin_auth
                                    ?
                                    //put in admin stuff 
                                    <Link to='/newevent'>
                                        <button className='btn btn-success'> Add a New Incident </button>
                                    </Link>
                                    :
                                    //put in regular dashboard 
                                    null
                                :
                                null
                        }
                        {
                            //If the user is not logged in we do not render a logout button
                            props.user_data
                                ?
                                <Link to='/'>
                                <button onClick={logout} className='btn btn-default'> Logout </button>
                                </Link>
                                :
                                null
                        }
                    </div>
            </div>
            <div className='about-body-content'>
                <h1> Predictive Analytics for Lab Safety and Security </h1>
                <hr className='about-horizontal-rule'/>
                <h3> Data Driven Solutions to Prevent Workplace Accidents </h3>
                <br/>
                <div className='top-text-box'>
                    <div className='about-text-top'>
                    <p className='about-text-description'> 
                    &nbsp;&nbsp;&nbsp;&nbsp; Accidents that happen in the workplace are a burden to both the employer and the employee. Injured employees suffer physical and emotional pain and may lose out on rightful compensation. This workplace has a vested stake in keeping its staff healthy to promote national security initiatives and appropriately handle taxpayer dollars. Due to this mutual need, many workplace safety protocols are applied in an attempt to mitigate hazards through communication programs. However, some people may feel like accidents can’t happen to them and managers may feel like their work area is hazard free.
                    <br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;   PALSS Dash is a prototype application built off of synthetic data that is meant to show the power of data visualization. The hope is that with the insights presented by visualizing the spatial temporal distribution of workplace accidents the risk of workplace hazards can be reduced. With data in hand this application will enable open communication between employees and managers and reduce the risk of workplace injury.
                    </p>    
                    </div>
                    <img className='staircase-photo' src='https://c1.staticflickr.com/9/8222/8368071600_fe8136029e_b.jpg' alt="Staircase" />
                </div>
                <div className='bottom-text-box'>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        user_data: state.reducer.user_data
    }
}

export default connect(mapStateToProps, {logout})(About)
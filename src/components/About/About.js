import React from 'react'
import { Link } from 'react-router-dom'

let About = props => {

    return(
        <div className="main-about-container">
                <div className='dashboard-header'>
                    <div className="dashboard-header-link-container">
                        <div> <img src={process.env.PUBLIC_URL + '/logo_transparent.png'} alt="logo" className="logo-mini" /> </div>
                        <Link to='/'> <h4 className="header-link-text"> Login </h4> </Link>
                        <Link to='/Dashboard'> <h4 className="header-link-text"> Dashboard </h4> </Link>
                         <h4 className="header-link-text about"> About </h4> 
                    </div>
                </div>
                <div className='about-body-content'>
                </div> 
            </div>
    )
}

export default About
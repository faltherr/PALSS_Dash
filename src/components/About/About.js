import React from 'react'
import { Link } from 'react-router-dom'

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
            </div>
            <div className='about-body-content'>
                <h1> Predictive Analytics for Lab Safety and Security </h1>
                <hr className='about-horizontal-rule'/>
                <h3> Data Driven Solutions to Prevent Workplace Accidents </h3>
                <br/>
                <div className='top-text-box'>
                    <div className='about-text-top'>
                    <p className='about-text-description'> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat mi nulla, in pretium risus tincidunt a. Mauris sit amet urna accumsan, varius magna eget, efficitur velit. Praesent pretium orci eu est feugiat lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum enim libero, efficitur ac neque ut, ultricies lobortis metus. Ut maximus eros eu turpis egestas venenatis. Aliquam auctor, orci tempor pulvinar dapibus, purus mauris tempor neque, vitae ultricies eros ligula non quam. Morbi et ullamcorper tellus. Aenean venenatis sem nec mi eleifend interdum. Sed ullamcorper pellentesque nisl, a viverra sapien. Pellentesque sed elit sed nulla accumsan scelerisque. Etiam sed pharetra ipsum. Integer euismod eu eros ut dictum. Nullam tellus est, semper vel laoreet id, dictum et dolor. Ut aliquam ipsum sed urna tincidunt, id imperdiet sapien imperdiet. Integer vitae congue sem. 

                    Morbi non condimentum dolor. Nunc quis neque quis sapien vehicula aliquam. Suspendisse pulvinar semper augue et congue. Phasellus ultricies, nulla ut facilisis maximus, odio sem posuere ipsum, eget volutpat odio risus id est. Aenean cursus ipsum id aliquet sollicitudin. Aenean rhoncus interdum fermentum. Ut sem felis, viverra a nisi quis, venenatis dictum mauris. Phasellus feugiat arcu dolor, eget bibendum risus porta at. Ut vestibulum sem eu turpis sagittis malesuada non vitae mi. Cras et feugiat erat, eu congue ipsum.
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

export default About
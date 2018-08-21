import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IncidentTable from './IncidentTable'
import SimpleMap from './Map';
import WeatherForecast from './Forecast'

export default class DashboardContainer extends Component {


    render() {
        return (
            <div className="main-dashboard-container">
                Dashboard Container
                <div>
                    <Link to='/newevent'>
                        <button> Add a New Incident </button>
                    </Link>
                </div>
                <div className='forecast-container'>
                    <WeatherForecast/>
                </div>

                <div className="map-wrapper">
                    <SimpleMap />
                </div>
                <br />
                <div className='table-wrapper'>
                    <IncidentTable />
                </div>
            </div>
        )
    }
}
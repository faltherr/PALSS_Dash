import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IncidentTable from './IncidentTable'
import SimpleMap from './Map';
import WeatherForecast from './Forecast'
// import DonutChart from './DonutChart'
import StackedBarChart from './StackedBar'

export default class DashboardContainer extends Component {


    render() {
        return (
            <div className="main-dashboard-container">
                <div>
                    <Link to='/newevent'>
                        <button> Add a New Incident </button>
                    </Link>
                </div>
                <div className="forecast-counter-table-wrapper">

                    <div className='table-wrapper'>
                        <IncidentTable />
                    </div>

                    <div className='forecast-container'>
                        <WeatherForecast />
                    </div>

                    <div className='event-counter'>
                        <StackedBarChart id="container"/>
                    </div>

                </div>

                <div className='map-graph-wrapper'>
                    <div className="map-wrapper">
                        <SimpleMap />
                    </div>

                    <div className='time-series-graph'>
                    Time series graph
                    </div>
                </div>

            </div>
        )
    }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import IncidentTable from './IncidentTable'
import SimpleMap from './Map';
import WeatherForecast from './Forecast'
import DonutChart from './DonutChart'
import StackedBarChart from './StackedBar'
import { getUser } from '../../Actions/authentication'
// import LineChart from './TimeSeries'

class DashboardContainer extends Component {

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        console.log(this.props.user_data)
        return (
            <div className="main-dashboard-container">
                <div className='dashboard-header'>
                    <div className="dashboard-header-link-container">
                        <div> <img src={process.env.PUBLIC_URL + '/logo_transparent.png'} alt="logo" className="logo-mini" /> </div>
                        <h4 className="header-link-text dashboard"> Dashboard </h4>
                        <Link to='/About'> <h4 className="header-link-text"> About </h4> </Link>
                    </div>
                    {
                        this.props.user_data
                            ?
                            this.props.user_data.admin_auth
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
                </div>
                <div className="forecast-counter-table-wrapper">

                    <div className='table-wrapper'>
                        <IncidentTable />
                    </div>

                    <div className='forecast-container'>
                        <WeatherForecast />
                    </div>

                    <div className='event-counter' >
                        <DonutChart />
                    </div>

                </div>

                <div className='map-graph-wrapper'>
                    <div className="map-wrapper">
                        <SimpleMap />
                    </div>

                    <div className='time-series-graph'>
                        <StackedBarChart id="container" />
                        {/* <LineChart/> */}
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("State", state)
    return {
        user_data: state.reducer.user_data
    }
}


export default connect(mapStateToProps, { getUser })(DashboardContainer)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import IncidentTable from './IncidentTable'
import SimpleMap from './Map';
import WeatherForecast from './Forecast'
import DonutChart from './DonutChart'
import StackedBarChart from './StackedBar'
import { getUser, logout } from '../../Actions/authentication'
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
                    <div className='dashboard-button-container'>
                        {
                            //If the user is logged in and they are an admin then we allow them to have admin privelleges to full CRUD
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
                        {
                            //If the user is not logged in we do not render a logout button
                            this.props.user_data
                                ?
                                <button onClick={logout} className='btn btn-default'> Logout </button>
                                :
                                null
                        }
                    </div>
                </div>
                <div className='user-data-interaction-container'>
                    {/* <Input type="select" onChange={this.onDropdownSelected}/> */}
                    <div className="filter-container">
                        <p> Select events occuring: </p>
                        <select className="date-filter-dropdown">
                            <option> Within the past 6 months </option>
                            <option> Within the past year </option>
                            <option> Within the past two years </option>
                            <option> Within the past five years </option>
                            <option> Since 2006 </option>
                        </select>
                    </div>
                    <div className="filter-container">
                    <p> Filter by location: </p>
                    <input />
                    </div>
                    <div className="filter-container">
                    <p> Filter by factors: </p>
                    <input />
                    </div>
                    <div className="filter-container">
                    <p> Filter by job: </p>
                    <input />
                    </div>
                    <div className="filter-container">
                    <p> Search by description: </p>
                    <input />
                    </div>
                </div>
                <div className="forecast-counter-table-wrapper">

                    <div className='table-wrapper'>
                        <IncidentTable />
                    </div>

                    {/* <div className='forecast-container'>
                        <WeatherForecast />
                    </div> */}

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


export default connect(mapStateToProps, { getUser, logout })(DashboardContainer)
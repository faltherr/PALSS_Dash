import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import IncidentTable from './IncidentTable'
import SimpleMap from './Map';
import WeatherForecast from './Forecast'
import DonutChart from './DonutChart'
import StackedBarChart from './StackedBar'
import {getEventsByTime} from '../../Actions/api_index'
import { getUser, logout } from '../../Actions/authentication'
import {filterEvents} from '../../Actions/event_handlers'
import { uniqueLocations, uniqueFactors, uniqueJobs, uniqueTimes } from './UniqueData'
import Select from 'react-select'
import LineChart from './LineChart'

var _ = require('lodash');

// import LineChart from './TimeSeries'

class DashboardContainer extends Component {
    constructor() {
        super()
        this.state = {
            preFilterArr: [],
            locationFilterString: '',
            factorsFilterString: '',
            jobsFilterString: '',
            descriptionFilterString: '',
            performFilter: false
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    handleChangeLocation = (inputVar) => {
        this.setState({
            locationFilterString: inputVar.value
        })
    }

    handleChangeFactors = (inputVar) => {
        this.setState({
            factorsFilterString: inputVar.value
        })
    }

    handleChangeJob = (inputVar) => {
        this.setState({
            jobsFilterString: inputVar.value
        })
    }

    handleChangeDescription(event) {
        this.setState({
            descriptionFilterString: event
        })
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.events)
        const { locationFilterString, factorsFilterString, jobsFilterString, descriptionFilterString } = this.state

        //step 1 
        //set a performFilter variable to false initially
        //do a check on each part of state that is a search input using this sort of logic 
        //prevState.locationFilterString !== locationFilterString 
        //flip performFilter
        let needsFilter = false;

        if (prevState.locationFilterString !== locationFilterString || prevState.factorsFilterString !== factorsFilterString || prevState.jobsFilterString !== jobsFilterString || prevState.descriptionFilterString !== descriptionFilterString) {
            needsFilter = true;
        }

        // console.log(this.state.performFilter)
        //Step 2 
        //set all of your boolean filter variables such as locationFilter, jobFilter e.t.c 
        //For each filter input in state check if the value is empty or not 
        //if the value is not empty, you need to include in filter so set locationFilter = true for instance if locationString was not empty

        // let factorsFilter, jobsFilter, descriptionFilter


        let locationFilter = locationFilterString ? true : false
        let factorsFilter = factorsFilterString ? true : false
        let jobsFilter = jobsFilterString ? true : false
        let descriptionFilter = descriptionFilterString ? true : false

        // console.log('location filter', descriptionFilter)

        // Step 3 --> Magic!!!
        //locationFilter, factorsFilter,  jobsFilter, descriptionFilter 
        let performFilter = () => {

            let preFilterArr = this.props.eventsTruth.slice()

            let filter = _.filter(preFilterArr, (o) => {

                if (locationFilter) {
                    if (!_.includes(o.tabuilding, locationFilterString)) return false
                }

                if (factorsFilter) {
                    if (!_.includes(o.factors1, factorsFilterString)) return false
                }

                if (jobsFilter) {
                    if (!_.includes(o.jobtitle, jobsFilterString)) return false
                }
                if (descriptionFilter) {
                    if (!_.includes(o.description, descriptionFilterString)) return false
                }
                return true;

            });
            this.props.filterEvents(filter)
        }
        if(needsFilter) performFilter()
    }

    render() {
        // console.log(this.props.user_data)
        // console.log(uniqueLocations)
        // console.log(this.state.eventsToFilter)
        // console.log(this.state.descriptionFilterString)
        // console.log("STATE", this.state)
        // console.log('location filter string', locationFilterString)
        // console.log('Job filter string', jobsFilterString)
        const { locationFilterString, factorsFilterString, jobsFilterString } = this.state
        return (
            <div className="main-dashboard-container">
                <div className='dashboard-header'>
                    <div className="dashboard-header-link-container">
                        <div> <img src={process.env.PUBLIC_URL + '/logo_transparent.png'} alt="logo" className="logo-mini" /> </div>
                        <h4 className="header-link-text dashboard"> Dashboard </h4>
                        <Link to='/About'> <h4 className="header-link-text"> About </h4> </Link>
                    </div>
                    <div className='forecast-container'>
                        <WeatherForecast />
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
                        <Select
                            value={{ value: uniqueTimes.label, label:  uniqueTimes.label}}
                            options={uniqueTimes}
                            onChange={(e) => this.props.getEventsByTime(e.value)}
                            className='dashboard-filter-bar'
                            // clearable={true}
                            placeholder={'Select...'}
                        />
                    </div>
                    <div className="filter-container">
                        <p> Filter by location: </p>
                        <Select
                            value={{ value: locationFilterString, label: locationFilterString }}
                            options={uniqueLocations}
                            onChange={this.handleChangeLocation}
                            className='dashboard-filter-bar'
                            // clearable={true}
                            placeholder={'Select...'}
                        />
                    </div>
                    <div className="filter-container">
                        <p> Filter by factors: </p>
                        <Select
                            value={{ value: factorsFilterString, label: factorsFilterString }}
                            options={uniqueFactors}
                            onChange={this.handleChangeFactors}
                            className='dashboard-filter-bar'
                            clearable={true}
                            placeholder={'Select...'}
                        />
                    </div>
                    <div className="filter-container">
                        <p> Filter by job: </p>
                        <Select
                            value={{ value: jobsFilterString, label: jobsFilterString }}
                            options={uniqueJobs}
                            onChange={this.handleChangeJob}
                            className='dashboard-filter-bar'
                            clearable={true}
                            placeholder={'Select...'}
                        />
                    </div>
                    <div className="filter-container">
                        <p> Search description: </p>
                        <input onChange={(e) => this.handleChangeDescription(e.target.value)} placeholder='Search...' />
                    </div>
                </div>
                <div className="forecast-counter-table-wrapper">

                    <div className='table-wrapper'>
                        <IncidentTable />
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
                        {/* <StackedBarChart id="container" /> */}
                        <LineChart events = {this.props.eventsTruth} />
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log("State", state)
    return {
        user_data: state.reducer.user_data,
        eventsTruth: state.reducer.eventsTruth
    }
}


export default connect(mapStateToProps, { getUser, logout, filterEvents, getEventsByTime })(DashboardContainer)
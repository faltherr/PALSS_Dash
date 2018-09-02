import React from 'react'
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing/Landing'
import DashboardContainer from './components/dashboard/DashboardContainer'
import EventNew from './components/event/EventNew'
import About from './components/About/About'

//Map the destination between a route and a component
// Whenever user is at the / URL render App

export default (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Dashboard" component={DashboardContainer}/>
        <Route path="/NewEvent" component={EventNew}/>
        <Route path="/About" component = {About}/>
        {/* <Route path="/DataDemoPlayground" component = {DataDemos}/> */}
    </Switch>
)
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing/Landing'
import DashboardContainer from './components/dashboard/DashboardContainer'
import EventNew from './components/event/EventNew'

//Map the destination between a route and a component
// Whenever user is at the / URL render App

export default (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Dashboard" component={DashboardContainer}/>
        <Route path="/NewEvent" component={EventNew}/>
    </Switch>
)
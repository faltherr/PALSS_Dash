import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IncidentTable from './IncidentTable'
import SimpleMap from './Map';

export default class DashboardContainer extends Component {

    
    render() {        
        return (
            <div>
                Dashboard Container
                <div>
                    <Link to='/newevent'>
                        <button> Add a New Incident </button>
                    </Link>
                </div>
                <SimpleMap/>
                <br/>
                <IncidentTable />
            </div>
        )
    }
}
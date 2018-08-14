import React, { Component } from 'react'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux'
import {getEvents} from '../../Actions/api_index'

class IncidentTable extends Component {

    componentDidMount(){
        this.props.getEvents()
    }

    render(){
        // console.log(this.props)
        // this.props.event.map
        return(
            <div>
                table
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        events: state.reducer.events
    }
}

export default connect(mapStateToProps, {getEvents})(IncidentTable)
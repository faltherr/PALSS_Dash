import React, { Component } from 'react'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux'
import {getEvents} from '../../Actions/api_index'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class IncidentTable extends Component {

    componentDidMount(){
        this.props.getEvents()
    }

    render(){
        // console.log(this.props.events)
        // this.props.event.map
        return(
            <div className="event-table">
                <BootstrapTable data = {this.props.events} height = '200' scrollTop={'Bottom'} striped hover>
                    <TableHeaderColumn width='120' dataField='id' isKey dataSort={ true }> Event ID </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='date' dataSort={ true }> Date </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='tabuilding' dataSort={ true }> TA-BLDG </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='factors1'> Primary Factors </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='factors2'> Secondary Factors </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='jobtitle'> Job Title </TableHeaderColumn>
                    <TableHeaderColumn width='150' dataField='description'> Description </TableHeaderColumn>
                </BootstrapTable>
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
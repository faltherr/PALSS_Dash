import React, { Component } from 'react'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux'
import {getEvents} from '../../Actions/api_index'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import Modal from 'react-responsive-modal';

class IncidentTable extends Component {
    
    componentDidMount(){
        this.props.getEvents()
    }

    render(){

        return(
            <div className="event-table">
                <BootstrapTable data = {this.props.events} height = '260' scrollTop={'Bottom'} striped hover bordered={ false } options={ { noDataText: 'Your data request is loading...' }} >
                    <TableHeaderColumn width='90' dataField='id' isKey dataSort={ true } > Event ID </TableHeaderColumn>
                    <TableHeaderColumn width='90' dataField='date' dataSort={ true }> Date </TableHeaderColumn>
                    <TableHeaderColumn width='100' dataField='tabuilding' dataSort={ true }> TA-BLDG </TableHeaderColumn>
                    <TableHeaderColumn width='120' dataField='factors1'> Primary Factors </TableHeaderColumn>
                    <TableHeaderColumn width='120' dataField='jobtitle'> Job Title </TableHeaderColumn>
                    <TableHeaderColumn width='120' dataField='description'> Description </TableHeaderColumn>
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
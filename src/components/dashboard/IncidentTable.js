import React, { Component } from 'react'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux'
import {getEvents} from '../../Actions/api_index'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import Modal from 'react-responsive-modal';

class IncidentTable extends Component {
    constructor(){
        super()
        this.state={
            setTableOption: 'Data request pending...'
        }
    }
    
    componentDidMount(){
        this.props.getEvents()
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.setTableOption !== prevState.setTableOption){
            if(this.props.pendingRequest){
                  this.setState({
                    setTableOption: 'No data located'
                  }) 
             }else{
                  this.setState({
                      setTableOption: 'Data request pending...'
                  })
             }
        }
       }
    

    render(){
        
            return(
                !this.props.pendingRequest
                ?
                <div className="event-table">
                    <p className='incident-table-title'> Incident Table </p>
                    <BootstrapTable data = {this.props.events} height = '260' scrollTop={'Bottom'} striped hover bordered={ false } options={ { noDataText: this.state.setTableOption } } >
                        <TableHeaderColumn width='90' dataField='id' isKey dataSort={ true } > Event ID </TableHeaderColumn>
                        <TableHeaderColumn width='90' dataField='date' dataSort={ true }> Date </TableHeaderColumn>
                        <TableHeaderColumn width='100' dataField='tabuilding' dataSort={ true }> TA-BLDG </TableHeaderColumn>
                        <TableHeaderColumn width='120' dataField='factors1'> Primary Factors </TableHeaderColumn>
                        <TableHeaderColumn width='120' dataField='jobtitle'> Job Title </TableHeaderColumn>
                        <TableHeaderColumn width='120' dataField='description'> Description </TableHeaderColumn>
                    </BootstrapTable>
                </div>
                :
                <div className="event-table">
                    <p className='incident-table-title'> Incident Table </p>
                    <BootstrapTable data = {[]} height = '260' scrollTop={'Bottom'} striped hover bordered={ false } options={ { noDataText: this.state.setTableOption } } >
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
        events: state.reducer.events,
        pendingRequest: state.reducer.pendingRequest
    }
}

export default connect(mapStateToProps, {getEvents})(IncidentTable)
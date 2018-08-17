import React, { Component } from 'react'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux'
import {getEvents} from '../../Actions/api_index'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import Modal from 'react-responsive-modal';

class IncidentTable extends Component {
    // constructor()  {
    //     super()
    //     this.state={
    //         open: false
    //     }
    // }
    
    componentDidMount(){
        this.props.getEvents()
    }

    // onOpenModal = () => {
    //     this.setState({ open: true });
    //   };
    
    //   onCloseModal = () => {
    //     this.setState({ open: false });
    //   };

    //  buttonFormatter = (cell, row) => {
    //     return '<button type="button" class="btn btn-indigo btn-sm m-0" onClick={this.onOpenModal}>Delete</button> <Modal open={open} onClose={this.onCloseModal} center>
    //     <h2>Simple centered modal</h2>
    //   </Modal>';
    //   }


    render(){
        // console.log(this.props.events)
        // this.props.event.map

        // This is for reac-respnsive-modal
        // const { open } = this.state;

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
                    {/* <TableHeaderColumn width='150' dataField='button' dataFormat={this.buttonFormatter}/>  */}
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
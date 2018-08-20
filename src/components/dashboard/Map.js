import React, { Component } from 'react'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'
import { connect } from 'react-redux'
import { deleteEvent, editEvent } from '../../Actions/api_index'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet'
import Modal from 'react-responsive-modal';
import EditEvent from './EditForm'

class SimpleMap extends Component {
    constructor() {
        super()
        this.state = {
            lat: 35.8400,
            lng: -106.3000,
            zoom: 12.4,
            openedit: false,
            opendelete: false
        }
    }

    onOpenModal = (type) => {
        this.setState({ [`open${type}`]: true });
    };

    onCloseModal = (type) => {
        this.setState({ [`open${type}`]: false });
    };

    closeAndDelete = (id, props) => {
        this.onCloseModal();
        this.props.deleteEvent(id, props)
    }

    // closeAndEdit = (id, props) => {
    //     console.log('sdlkfslhflk')
    //     this.onCloseModal();
    //     this.props.editEvent(id, props)
    // }


    // Commented this out because it was holding up the form submission

    // handleSubmit = (e, id) => {
    //     e.preventDefault();
    //     const formData = {};
    //     for (const field in this.refs) {
    //       formData[field] = this.refs[field].value;
    //     }
    //     // console.log(formData)
    //     this.onCloseModal();
    //     this.props.editEvent(id, formData)
    // }

    handleSubmit = (event, id) => {
        event.preventDefault();
        const data = new FormData(event.target);

        this.closeAndDelete(id, data)
    }




    createMarkers(events) {

        const { openedit, opendelete } = this.state
        return events.map(event => {
            let { latitude: lat, longitude: lon, id, date, tabuilding, description, jobtitle, factors1, factors2, bodyparts } = event
            return lat && lon &&
                <Marker position={[lat, lon]} key={id}>
                    <Popup>
                        <span> Id: {id} </span>
                        <br />
                        <span> Date: {date} </span>
                        <br />
                        <span> Location: {tabuilding} </span>
                        <br />
                        <button onClick={() => this.onOpenModal('edit')}>Edit</button>
                        <Modal open={openedit} onClose={() => this.onCloseModal('edit')} center>
                            <div className="edit-form">
                                <EditEvent/>
                                {/* <form onSubmit={this.handleSubmit}>
                                    <h2>Edit the Incident </h2>
                                    <p> Incident ID: {id} </p>

                                    TA-Building (Example: 43-0200)
                                <br />
                                    <input value={tabuilding} ref="tabuilding" className="tabuilding" type='text' name='tabuilding' />
                                    <br />

                                    Job Title
                                <br />
                                    <input value={jobtitle} ref="jobtitle" className="jobtitle" type='text' name='jobtitle' />
                                    <br />

                                    Primary Factors
                                <br />
                                    <input value={factors1} ref="factors1" className="factors1" type='text' name='factors1' />
                                    <br />

                                    Secondary Factors
                                <br />
                                    <input value={factors2} ref="factors2" className="factors2" type='text' name='factors2' />
                                    <br />

                                    Body Parts
                                <br />
                                    <input value={bodyparts} ref="bodyparts" className="bodyparts" type='text' name='bodyparts' />
                                    <br />

                                    Description
                                <br />
                                    <input value={description} ref="description" className="description" type='text' name='description' />
                                    <br />

                                    <input type="submit" value="Confirm Changes and Submit" />

                                </form> */}
                            </div>
                        </Modal>
                        <button onClick={() => this.onOpenModal('delete')}>Delete</button>
                        <Modal open={opendelete} onClose={() => this.onCloseModal('delete')} center>
                            <h2>Are you sure you want to delete this incident?</h2>
                            <button onClick={() => { this.closeAndDelete(id) }} > Confirm and delete </button>
                        </Modal>
                    </Popup>
                </Marker>
        })
    }

    componentWillReceiveProps(props) {
        if (props.events.length) {
            this.setState({
                markers: this.createMarkers(props.events)
            })
        }
    }

    render() {

        const map_position = [this.state.lat, this.state.lng];

        // const { open } = this.state

        // console.log("Props accessible in map component", this.props, map_position)

        // const LeafletMarkers = this.props.event.map((element) => {
        //     let { latitude: lat, longitude: lon, id, date, tabuilding } = element
        //     return (
        //         lat && lon && <CircleMarker key={id} center={[lat, lon]} fillColor="blue" fill="true" radius={8}>
        //             <Popup>
        //                 <span> Date: {date} </span>
        //                 <br />
        //                 <span> Location: {tabuilding} </span>
        //             </Popup>
        //         </CircleMarker>
        //     )
        // })

        //

        const createClusterCustomIcon = function (cluster) {
            return L.divIcon({
                html: `<span>${cluster.getChildCount()}</span>`,
                className: 'marker-cluster-custom',
                iconSize: L.point(40, 40, true),
            });
        };

        //

        // console.log(47837374834783, markers)



        return (
            <div id="container">
                <Map center={map_position} zoom={this.state.zoom} className="map-container" maxZoom={18} minZoom={10}>
                    <TileLayer
                        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url='https://api.mapbox.com/styles/v1/faltherr/cjku8ndjw044x2rpjzyvz6imf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmFsdGhlcnIiLCJhIjoiY2prdTVxZW4zMDNmeDNrcWs3YmJrbTRwcCJ9.7Qq2GjLoD9jpqToGtpYVAA'
                    />



                    <MarkerClusterGroup
                        showCoverageOnHover={true}
                        // spiderfyDistanceMultiplier={2}
                        iconCreateFunction={createClusterCustomIcon}
                    // markers={markers}
                    >
                        {this.createMarkers(this.props.events)}
                    </MarkerClusterGroup>

                </Map>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.reducer.events
    }
}

export default connect(mapStateToProps, { deleteEvent, editEvent })(SimpleMap)
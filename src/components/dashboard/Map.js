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

    closeAndEdit = (id, props) => {
        // console.log('sdlkfslhflk')
        this.onCloseModal();
        this.props.editEvent(id, props)
    }

    handleSubmit = (event, id) => {
        event.preventDefault();
        const data = new FormData(event.target);

        this.closeAndDelete(id, data)
    }




    createMarkers(events) {

        const { openedit, opendelete } = this.state
        // console.log('Events in mapjs', events)
        return events.map(event => {
            let { latitude: lat, longitude: lon, id, date, tabuilding } = event
            return lat && lon &&
                <Marker position={[lat, lon]} key={id}>
                    <Popup>
                        <span> Id: {id} </span>
                        <br />
                        <span> Date: {date} </span>
                        <br />
                        <span> Location: {tabuilding} </span>
                        <br />

                        {
                            this.props.user_data
                            ?
                            this.props.user_data.admin_auth
                            ?
                            //put in admin stuff 
                            <div>
                            <button onClick={() => this.onOpenModal('edit')} className='btn btn-primary'>Edit</button>
                                    <Modal open={openedit} onClose={() => this.onCloseModal('edit')} center>
                                        <div className="edit-form">
                                            <EditEvent id={id} closeModal={this.onCloseModal} />
                                        </div>
                                    </Modal>

                                    <button onClick={() => this.onOpenModal('delete')} className='btn btn-danger'>Delete</button>
                                    <Modal open={opendelete} onClose={() => this.onCloseModal('delete')} center>
                                        <h2>Are you sure you want to delete this incident?</h2>
                                        <button onClick={() => { this.closeAndDelete(id) }} className='btn btn-danger' > Confirm and delete </button>
                                    </Modal>
                             </div>       
                                :
                                    //put in regular dashboard 
                                    null
                                :
                                null
                        }




                    </Popup>
                </Marker>
        })
    }

    componentWillReceiveProps(props) {
        // console.log('map component receives props', props.events)
        if (props.events.length) {
            this.setState({
                markers: this.createMarkers(props.events)
            })
        }
    }

    render() {

        const map_position = [this.state.lat, this.state.lng];

        const createClusterCustomIcon = function (cluster) {
            return L.divIcon({
                html: `<span>${cluster.getChildCount()}</span>`,
                className: 'marker-cluster-custom',
                iconSize: L.point(40, 40, true),
            });
        };

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
        events: state.reducer.events,
        user_data: state.reducer.user_data
    }
}

export default connect(mapStateToProps, { deleteEvent, editEvent })(SimpleMap)
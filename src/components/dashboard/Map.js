import React, { Component } from 'react'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'
import { connect } from 'react-redux'
import {deleteEvent} from '../../Actions/api_index'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet'
import Modal from 'react-responsive-modal'; 


class SimpleMap extends Component {
    constructor() {
        super()
        this.state = {
            lat: 35.8400,
            lng: -106.3000,
            zoom: 12.4,
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    closeAndDelete = (id) => {
        this.onCloseModal();
        this.props.deleteEvent(id)
    }

    render() {

        const map_position = [this.state.lat, this.state.lng];

        const { open } = this.state

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

        let markers = this.props.event.map(event => {
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
                        <button onClick={this.onOpenModal}>Edit</button>
                            <Modal open={open} onClose={this.onCloseModal} center>
                                <h2>Simple centered modal</h2>
                                <button> Confirm and commit changes </button>
                            </Modal>
                        <button onClick={this.onOpenModal}>Delete</button>
                            <Modal open={open} onClose={this.onCloseModal} center>
                                    <h2>Are you sure you want to delete this event?</h2>
                                    <button onClick ={()=> {this.closeAndDelete(id)}} > Confirm and delete </button> 
                            </Modal>            
                    </Popup>
                </Marker>
        })

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
                        {markers}
                    </MarkerClusterGroup>

                </Map>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        event: state.reducer.events
    }
}

export default connect(mapStateToProps, {deleteEvent})(SimpleMap)
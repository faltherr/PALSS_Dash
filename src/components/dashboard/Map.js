import React, { Component } from 'react'
import { Map, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { connect } from 'react-redux'
// import MarkerClusterGroup from 'react-leaflet-markercluster';


class SimpleMap extends Component {
    constructor() {
        super()
        this.state = {
            lat: 35.8400,
            lng: -106.3000,
            zoom: 12.4
        }
    }

    render() {
        const map_position = [this.state.lat, this.state.lng];
        // console.log("Props accessible in map component", this.props, map_position)

        const LeafletMarkers = this.props.event.map((element) => {
            let { latitude: lat, longitude: lon, id, date, tabuilding } = element
            return (
                lat && lon && <CircleMarker key={id} center={[lat, lon]} fillColor="blue" fill="true" radius={8}>
                    <Popup>
                        <span> Date: {date} </span>
                        <br />
                        <span> Location: {tabuilding} </span>
                    </Popup>
                </CircleMarker>
            )

        })
        console.log(47837374834783, LeafletMarkers)
        return (
            <div id="container">
                <Map center={map_position} zoom={this.state.zoom} className="map-container">
                    <TileLayer
                        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url='https://api.mapbox.com/styles/v1/faltherr/cjku8ndjw044x2rpjzyvz6imf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmFsdGhlcnIiLCJhIjoiY2prdTVxZW4zMDNmeDNrcWs3YmJrbTRwcCJ9.7Qq2GjLoD9jpqToGtpYVAA'
                    />
                    {/* <MarkerClusterGroup> */}
                        {LeafletMarkers}
                    {/* </MarkerClusterGroup> */}
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

export default connect(mapStateToProps)(SimpleMap)
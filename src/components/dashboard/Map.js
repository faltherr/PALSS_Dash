import React, {Component} from 'react'
import { Map, TileLayer, CircleMarker} from 'react-leaflet'
import {connect} from 'react-redux'

class SimpleMap extends Component {
  constructor() {
    super()
    this.state = {
      lat: 35.8600,
      lng: -106.3300,
      zoom: 12
    }
  }

  render() {
    const map_position = [this.state.lat, this.state.lng];
    console.log("Props accessible in map component", this.props, map_position)
    
    const LeafletMarkers = this.props.event.map((element) => {
        let { latitude: lat, longitude: lon, id } = element
        return(
        lat && lon && <CircleMarker key={id} center = {[lat, lon]} fillColor="blue" radius ={10} />
        )
        
    })
    return (
        <div id="container">
      <Map center={map_position} zoom={this.state.zoom} className="map-container">
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
        />
        {LeafletMarkers}
      </Map>
      </div>
    );
  }
}

function mapStateToProps (state){
    return{
        event: state.reducer.events
    }
}

export default connect(mapStateToProps)(SimpleMap)
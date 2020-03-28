import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const MAPBOX_PUBLIC_TOKEN = `pk.eyJ1IjoiYmVsbGNkIiwiYSI6ImNrOGF3OWR0eDAyaGIza25zZmY3NTN5N3kifQ.R7W71LHAUjZBUdkhoEbPAg`;

export class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 37.7749,
      lng: -122.4194,
      zoom: 6,
    };
  }

  render() {
    const center = [this.state.lat, this.state.lng];

    return (
      <div className="map-wrapper">
        <Map
          center={center}
          zoom={this.state.zoom}
          style={{ width: '100%', height: '100vh' }}
        >
          <TileLayer
            attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${MAPBOX_PUBLIC_TOKEN}`}
          />
        </Map>
      </div>
    );
  }
};
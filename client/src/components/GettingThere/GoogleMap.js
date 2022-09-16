import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 51.50762020509655,
      lng: -0.07379389154198485,
    },
    zoom: 16,
  };

  render() {
    return (
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBrxyovMrBmI_cc42sVzkDdwHn6Pd8d7Uw", //Change key
            language: "en",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={51.50762020509655}
            lng={-0.07379389154198485}
            text={"We Are Here"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
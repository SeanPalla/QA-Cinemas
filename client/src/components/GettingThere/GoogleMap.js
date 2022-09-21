import React from "react";
import {
  InfoWindow,
  Circle,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "500px",
  display: "inline-block",
};

const center = {
  lat: 51.50762020509655,
  lng: -0.07379389154198485,
};

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30,
  zIndex: 1,
};

const onLoad = (circle) => {
  console.log("Circle onLoad circle: ", circle);
};

const onUnmount = (circle) => {
  console.log("Circle onUnmount circle: ", circle);
};

const position = { lat: 51.50762020509655, lng: -0.07379389154198485 };

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAIV6-66eS0UvUnAvesQLEC_eBr4MsRWMU">
      <GoogleMap 
        id="circle-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        {
          <Circle
            onLoad={onLoad}
            onUnmount={onUnmount}
            center={center}
            options={options}
          />
        }

        {
          <InfoWindow onLoad={onLoad} position={position}>
            <div style={divStyle}>
              <h1>We Are Here</h1>
            </div>
          </InfoWindow>
        }
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);

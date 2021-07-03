import GoogleMapReact from "google-map-react";
import { Typography } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { Marker } from "./styles";

const MarkerComponent = ({ text }) => (
  <Marker>
    <Typography variant="subtitle1">
      {text}
      <br />
      <RoomIcon />
    </Typography>
  </Marker>
);

export default function SimpleMap({ center, locationName }) {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB0lZYHr4WQMlnsFGjqpV-ipRl45y3GrZw" }}
        defaultCenter={center}
        defaultZoom={5}
      >
        <MarkerComponent
          lat={center.lat}
          lng={center.lng}
          text={locationName}
        />
      </GoogleMapReact>
    </div>
  );
}

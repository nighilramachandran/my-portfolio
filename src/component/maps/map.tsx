import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { Marker } from "./marker";
export const MapComponents = () => {
  const defaultProps = {
    center: {
      lat: 25.0553809,
      lng: 55.2180533,
    },
    zoom: 11,
  };
  const StyledBoxInner = styled(Box)(({ theme }: any) => ({
    width: "100%",
    height: "400px",
    overflow: "hidden",
  }));

  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: { lat: 25.0553809, lng: 55.2180533 },
      map,
      title: "",
    });
    return marker;
  };
  return (
    <>
      <StyledBoxInner>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAD6Ro5trYroHIf57V1SxE9-TMIC2AwwSw",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <Marker />
        </GoogleMapReact>
      </StyledBoxInner>
    </>
  );
};

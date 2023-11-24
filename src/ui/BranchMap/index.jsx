import React, { Component, useState, useCallback } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { getGlobal } from "@/getters/getGlobal";

const libraries = ["maps", "places"];

class InfoWindowMap extends Component {
  constructor(props) {
    super(props);

    this.lat = parseFloat(props.branch.latitude);
    this.lng = parseFloat(props.branch.longitude);
    this.state = {
      isOpen: false,
    };
  }

  handleToggleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { branch } = this.props;

    return (
      <Marker key={branch.id} position={{ lat: this.lat, lng: this.lng }} onClick={this.handleToggleOpen}>
        {this.state.isOpen && (
          <InfoWindow onCloseClick={() => this.setState({ isOpen: false })}>
            <>
              <h4>{branch.name}</h4>
              <div dangerouslySetInnerHTML={{ __html: branch.address }} />
              <p>{branch.phone}</p>
              <a href={`/our-branches/${branch.url_slug}/`}>About this branch</a>
            </>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default function BranchMap({ branches }) {
  const global = getGlobal();
  const googleMapsApiKey = global["_theme.googleMapsApiKey"];

  if (!googleMapsApiKey) {
    return null;
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
    libraries,
  });

  const [_map, setMap] = useState(null);
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "500px",
      }}
      center={{
        lat: 54.2138612,
        lng: -4.4604488,
      }}
      zoom={5}
      onUnmount={onUnmount}
    >
      {branches.map((branch) => (
        <InfoWindowMap key={branch.id} branch={branch} />
      ))}
    </GoogleMap>
  );
}

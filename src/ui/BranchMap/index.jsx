import React, { Component } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const libraries = ["maps", "places"];

class InfoWindowMap extends Component {
  constructor(props){
    super(props);

    this.lat = parseFloat(props.branch.latitude)
    this.lng = parseFloat(props.branch.longitude)
    this.state = {
      isOpen: false
    }

  }

  handleToggleOpen = () => {

    this.setState({
      isOpen: true
    });
  }

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  }
  render() {

  return (
      <Marker
        key={this.props.branch.id}
        position={{ lat: this.lat, lng: this.lng}}
        onClick={() => this.handleToggleOpen()}
      >
        {
          this.state.isOpen &&
          <InfoWindow onCloseClick={() => this.setState({isOpen: false})}>
            <>
              <h4>{this.props.branch.name}</h4>
              <div dangerouslySetInnerHTML={{ __html: this.props.branch.address}} />
              <p>{this.props.branch.phone}</p>
              <a href={`/our-branches/${this.props.branch.url_slug}/`}>About this branch</a>
            </>
          </InfoWindow>
        }
      </Marker>

    )
  }
}

export default function BranchMap({ branches }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB22hcjzKx-IdKqgbc6ARHR0ngevH02CTA",
    libraries: libraries,
  })

  const [map, setMap] = React.useState(null)

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const containerStyle = {
    width: '100%',
    height: '500px'
  };

  const center = {
    lat: 54.2138612,
    lng: -4.4604488
  };

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onUnmount={onUnmount}
      >
        {
          branches.map(branch => {
            return <InfoWindowMap key={branch.id} branch={branch} />
          })
        }
      </GoogleMap>
  ) : <></>
}
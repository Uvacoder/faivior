import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Container from './styles'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const ContactDash = () => {
  const [{ center, zoom }, setState] = useState({
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  })
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAlKkpF4_RayjkYPMJ-fP9szQoS4bNXkNM' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </Container>
  )
}

export default ContactDash

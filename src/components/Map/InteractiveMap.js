import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import styled from 'styled-components'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: iconShadow,
})

const StyledMap = styled(Map)`
  height: 700px;
  z-index: 9;
`
export default class InteractiveMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mapOptions: {
        center: [51.505, -0.09],
        zoom: 13,
      },
    }
  }

  render() {
    const { mapOptions } = this.state

    if (typeof window !== 'undefined') {
      return (
        <StyledMap {...mapOptions}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapOptions.center}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </StyledMap>
      )
    }
    return null
  }
}

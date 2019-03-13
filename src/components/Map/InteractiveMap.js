import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer, LayerGroup, ImageOverlay, Tooltip, Polygon } from 'react-leaflet'
import styled from 'styled-components'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import mapimage from 'src/images/new-mapdesign-2.jpg'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import styles from './InteractiveMap.module.css'
import MapLightBox from './LightBox'

if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: icon,
    iconUrl: icon,
    shadowUrl: iconShadow,
  })
}

export default class InteractiveMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mapOptions: {
        center: [51.505, -0.09],
        zoom: 13,
      },
      currLightboxItem: null,
    }
    this.markerClick = this.markerClick.bind(this)

    this.escFunction = event => {
      if (event.keyCode === 27) {
        // esc key pressed
        this.closeLightBox()
      }
    }
  }

  markerClick = (title, index) => {
    // console.log(this.props.locations.edges[index])
    // console.log(`click on: ${title}`)
    // console.log(`click on: ${title}`, this.props.locations.edges[index].node.title)
    this.setState({ currLightboxItem: this.props.locations.edges[index].node })
  }

  closeLightBox = () => {
    this.setState({ currLightboxItem: null })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
  }

  render() {
    const { mapOptions, currLightboxItem } = this.state
    const { locations } = this.props

    if (typeof window !== 'undefined') {
      return (
        <>
          {currLightboxItem && <MapLightBox content={currLightboxItem} closeLightBox={this.closeLightBox} />}
          <Map className={styles.map} crs={L.CRS.Simple} bounds={[[0, 0], [1260, 1920]]} minZoom={-0.7} maxZoom={1}>
            <ImageOverlay url={mapimage} bounds={[[0, 0], [1260, 1920]]} />
            {/* <Polygon
            positions={[[300, 900], [300, 600], [600, 600], [600, 900]]}
            color="blue"
            onClick={this.MarkerClick}
          /> */}
            {locations.edges.map(({ node }, index) => {
              // console.log(this.MarkerClick)
              const latLong = [node.lat, node.long]
              return (
                <Marker key={index} position={latLong} onClick={() => this.markerClick(node.title, index)}>
                  <Tooltip permanent interactive direction="top" offset={[0, 20]}>
                    {node.title}
                  </Tooltip>
                </Marker>
              )
            })}

            {/* <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          /> */}
            {/* <Marker position={mapOptions.center}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker> */}
          </Map>
        </>
      )
    }
    return null
  }
}

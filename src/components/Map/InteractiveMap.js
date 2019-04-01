import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer, LayerGroup, ImageOverlay, Tooltip, Polygon } from 'react-leaflet'
import styled from 'styled-components'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import mapimage from 'src/images/mdc-map.jpg'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import styles from './InteractiveMap.module.css'
import MapLightBox from './LightBox'

if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    // iconRetinaUrl: icon,
    // iconUrl: icon,
    // shadowUrl: iconShadow,
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
      width: 0,
      height: 0,
      currLightboxItem: null,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)

    this.markerClick = this.markerClick.bind(this)

    this.escFunction = event => {
      if (event.keyCode === 27) {
        // esc key pressed
        this.closeLightBox()
      }
    }
  }

  componentDidMount() {
    this.updateWindowDimensions()
    document.addEventListener('keydown', this.escFunction, false)
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  markerClick = index => {
    const {
      locations: { edges },
    } = this.props
    this.setState({ currLightboxItem: edges[index].node })
  }

  calcLabelOffset = labelDir => {
    switch (labelDir) {
      case 'top':
        return [0, 25]
      case 'bottom':
        return [0, -5]
      case 'left':
        return [20, 20]
      case 'right':
        return [-20, 25]
      default:
        return [0, 25]
    }
  }

  closeLightBox = () => {
    this.setState({ currLightboxItem: null })
  }

  updateWindowDimensions() {
    console.log(window.innerWidth, window.innerHeight)
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const { mapOptions, currLightboxItem, height } = this.state
    const { locations } = this.props

    if (typeof window !== 'undefined') {
      return (
        <>
          {currLightboxItem && <MapLightBox content={currLightboxItem} closeLightBox={this.closeLightBox} />}
          <Map
            className={styles.map}
            crs={L.CRS.Simple}
            bounds={[[0, 0], [1063, 1920]]}
            minZoom={0}
            maxZoom={1}
            center={[650, 900]}
            style={{ height: `${(height - 86).toString()}px` }}
          >
            <ImageOverlay url={mapimage} bounds={[[0, 0], [1063, 1920]]} />
            {/* <Polygon
            positions={[[300, 900], [300, 600], [600, 600], [600, 900]]}
            color="blue"
            onClick={this.MarkerClick}
          /> */}
            {locations.edges.map(({ node }, index) => {
              // console.log(this.MarkerClick)
              const latLong = [node.lat, node.long]
              const currOffset = this.calcLabelOffset(node.labelDirection)

              return (
                <Marker key={index} position={latLong} onClick={() => this.markerClick(index)}>
                  <Tooltip permanent interactive direction={node.labelDirection} offset={currOffset}>
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

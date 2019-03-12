import React from 'react'
import styled from 'styled-components'
import InteractiveMap from 'src/components/Map/InteractiveMap'

const MapFrame = styled.iframe`
  ${tw`mb-0`};
`

class FullScreenTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const { locations } = this.props
    return (
      <>
        <InteractiveMap locations={locations} />
        {/* <MapFrame
          title="interactive map"
          width="100%"
          height="900"
          src="https://maphub.net/embed/50364?panel=1"
          frameBorder="0"
        /> */}
      </>
    )
  }
}

export default FullScreenTemplate

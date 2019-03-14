import React from 'react'
import InteractiveMap from 'src/components/Map/InteractiveMap'

const FullScreenTemplate = ({ locations }) => (
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

export default FullScreenTemplate

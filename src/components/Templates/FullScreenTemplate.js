import React from 'react'
import InteractiveMap from 'src/components/Map/InteractiveMap'

const FullScreenTemplate = ({ locations }) => (
  <>
    <InteractiveMap locations={locations} />
  </>
)

export default FullScreenTemplate

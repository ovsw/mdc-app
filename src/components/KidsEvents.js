import React from 'react'
import styled from 'styled-components'
import NarrowContent from 'src/components/common/NarrowContent'
import KidsEvent from 'src/components/KidsEvent'


const KidsEvents = ({ events }) => (

  <NarrowContent>
    {events.map(event => (
      <KidsEvent key={event.title} event={event} />
    ))}
  </NarrowContent>
)

export default KidsEvents

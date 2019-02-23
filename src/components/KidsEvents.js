import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import KidsEvent from 'src/components/KidsEvent'

const KidsEventsWrapper = styled.div`
  ${tw`mb-8`};
`

const KidsEvents = ({ events }) => (
  <KidsEventsWrapper>
    {events.map(event => (
      <KidsEvent key={event.title} event={event} />
    ))}
  </KidsEventsWrapper>
)

export default KidsEvents

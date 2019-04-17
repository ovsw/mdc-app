import React from 'react'
import styled from 'styled-components'
import PageSecton from 'src/components/Content/PageSection'

const HomePageSection = styled(PageSecton)`
  & h1:first-child, & h2:first-child {
    margin-top: 0;
  }

  & div:last-child, & p:last-child {
    margin-bottom: 0;
  }
`

export default HomePageSection
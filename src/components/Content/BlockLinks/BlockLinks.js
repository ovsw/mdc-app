import React from 'react'
import styled from 'styled-components'
import BlockLink from './BlockLink'

const BlockLinksWrapper = styled.div`
  ${tw`flex flex-col md:flex-row md:flex-wrap px-1 md:px-0 mb-2`};
`

const BlockLinks = ({ items }) => (
  <BlockLinksWrapper>
    {items.map(item => (
      <BlockLink item={item} key={item.title} />
    ))}
  </BlockLinksWrapper>
)

export default BlockLinks

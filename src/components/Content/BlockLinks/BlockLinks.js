import React from 'react'
import BlockLink from './BlockLink/BlockLink'

const BlockLinks = ({ items }) => (
  <div className="flex flex-col md:flex-row md:flex-wrap px-2 mb-2">
    {items.map(item => (
      <BlockLink item={item} key={item.title} />
    ))}
  </div>
)

export default BlockLinks

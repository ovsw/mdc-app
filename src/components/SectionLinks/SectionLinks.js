import React from 'react'
import SectionLink from './SectionLink/SectionLink'

const SectionLinks = ({ items }) => (
  <div className="flex flex-col md:flex-row md:flex-wrap px-2 mb-2">
    {items.map(item => (
      <SectionLink item={item} key={item.title} />
    ))}
  </div>
)

export default SectionLinks

import React from 'react'
import Img from 'gatsby-image'

const ImageBlock = ({ block }) => (
  <div
    className="container mx-auto md:px-8 xl:px-16"
    style={block.image.width < block.image.height ? { paddingLeft: '8rem', paddingRight: '8rem' } : {}}
  >
    <figure className="contentImage">
      <Img fluid={block.image.fluid} />
      <figcaption>{block.caption}</figcaption>
    </figure>
  </div>
)

export default ImageBlock

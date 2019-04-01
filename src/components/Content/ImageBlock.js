import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ImageContainer = styled.div`
  ${tw`container mx-auto md:px-8 xl:px-16`};
`

const ImageBlock = ({ block }) => (
  <ImageContainer style={block.image.width < block.image.height ? { maxWidth: '600px' } : { maxWidth: '800px' }}>
    <figure className="contentImage">
      <Img fluid={block.image.fluid} />
      <figcaption>{block.caption}</figcaption>
    </figure>
  </ImageContainer>
)

export default ImageBlock

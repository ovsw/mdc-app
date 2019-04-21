import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const CtaBlockStyled = styled.div`
  ${tw`py-20 px-8 text-white font-primary`};
  background-color: rgba(0, 105, 0, 0.7);
`
const StyledBgImage = styled(BackgroundImage)`
  ${tw``};
  background-attachment: fixed;
  background-size: auto 1000px;
  background-position: 0% 50%;
`

const CtaBlock = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        backgroundImage: file(relativePath: { eq: "summer-camp-maplewood-boats-lake.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxHeight: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.backgroundImage.childImageSharp.fluid
      return (
        <StyledBgImage Tag="section" className={className} fluid={imageData}>
          <CtaBlockStyled>{children}</CtaBlockStyled>
        </StyledBgImage>
      )
    }}
  />
)

export default CtaBlock

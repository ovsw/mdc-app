import React from 'react'
import { graphql } from 'gatsby'
import FullScreenTemplate from 'src/components/Templates/FullScreenTemplate'

const InteractiveMap = ({ data }) => <FullScreenTemplate locations={data.allDatoCmsMapLocation} />

export default InteractiveMap

export const query = graphql`
  query InteractiveMapQuery {
    allDatoCmsMapLocation {
      edges {
        node {
          title
          lat
          long
          desc
          labelDirection
          images {
            url
            large: fluid(
              maxWidth: 533
              maxHeight: 533
              imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy" }
            ) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            thumb: fluid(
              maxWidth: 80
              maxHeight: 80
              imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy" }
            ) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  }
`

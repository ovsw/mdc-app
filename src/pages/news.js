import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const NewsPage = ({ data }) => {
  console.log('test')

  return (
    <>
      <BasicPageTemplate data={data.datoCmsNewsListing} />
    </>
  )
}

export default NewsPage

export const query = graphql`
  query NewsPageQuery {
    datoCmsNewsListing {
      bannerImage {
        url
        portrait: fluid(
          maxWidth: 1200
          maxHeight: 769
          imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy", mono: "14FF5D00" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import NewsListingPageTemplate from 'src/components/Templates/NewsListingPageTemplate'

const NewsPage = ({ data }) => (
  <NewsListingPageTemplate data={data.datoCmsNewsListing} articles={data.allDatoCmsNewsArticle} />
)

export default NewsPage

export const query = graphql`
  query NewsPageQuery {
    datoCmsNewsListing {
      bannerImage {
        url
        portrait: fluid(
          maxWidth: 1200
          maxHeight: 769
          imgixParams: {
            fm: "jpg"
            auto: "enhance,compress"
            fit: "crop"
            crop: "faces,entropy"
            monochrome: "14FF5D00"
          }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    allDatoCmsNewsArticle(sort: { fields: [date], order: DESC }, limit: 20) {
      edges {
        node {
          title
          slug
          externalPostUrl
          shortDate: date(formatString: "dddd, MMM Do")
          bannerImage {
            url
            fluid(
              maxWidth: 450
              maxHeight: 450
              imgixParams: {
                fm: "jpg"
                auto: "enhance,compress"
                fit: "crop"
                crop: "faces,lines"
                monochrome: "14FF5D00"
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
          excerpt
        }
      }
    }
  }
`

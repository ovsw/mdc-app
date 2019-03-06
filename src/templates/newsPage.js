import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const NewsPage = ({ data }) => <BasicPageTemplate data={data.datoCmsNewsArticle} />

export default NewsPage

export const query = graphql`
  query NewsArticleQuery($slug: String!) {
    datoCmsNewsArticle(slug: { eq: $slug }) {
      title
      callToActionText
      callToActionLink
      shortDate: date(formatString: "dddd, MMM Do")
      longDate: date(formatString: "dddd, MMMM Do, YYYY")
      bannerImage {
        url
        cover: fluid(
          maxWidth: 450
          maxHeight: 450
          imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy", mono: "14FF5D00" }
        ) {
          ...GatsbyDatoCmsFluid
        }
        portrait: fluid(
          maxWidth: 1200
          maxHeight: 769
          imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy", mono: "14FF5D00" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      body {
        ... on DatoCmsRichText {
          id
          model {
            apiKey
          }
          text
        }
        ... on DatoCmsQuote {
          id
          model {
            apiKey
          }
          text
        }
        ... on DatoCmsImage {
          id
          model {
            apiKey
          }
          caption
          image {
            url
            width
            height
            fluid(
              maxWidth: 892
              imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,lines", mono: "14FF5D00" }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const StaffPage = ({ data }) => <BasicPageTemplate data={data.datoCmsStaffPage} />

export default StaffPage

export const query = graphql`
  query StaffPageQuery($slug: String!) {
    datoCmsStaffPage(slug: { eq: $slug }) {
      title
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
              imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy", mono: "14FF5D00" }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`

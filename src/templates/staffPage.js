import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const StaffPage = ({ data }) => {
  const bannerImage = data.datoCmsStaffPage.bannerImage != null ? data.datoCmsStaffPage.bannerImage : 'missingImage'

  return (
    <BasicPageTemplate
      title={data.datoCmsStaffPage.title}
      bannerImage={bannerImage}
      body={data.datoCmsStaffPage.body}
    />
  )
}

export default StaffPage

export const query = graphql`
  query StaffPageQuery($slug: String!) {
    datoCmsStaffPage(slug: { eq: $slug }) {
      title
      bannerImage {
        url
        fluid(
          maxWidth: 1200
          maxHeight: 400
          imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", mono: "14FF5D00" }
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
          image {
            url
            fluid(maxWidth: 1040, maxHeight: 400, imgixParams: { fm: "jpg", auto: "enhance,compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const SchoolYearPage = ({ data }) => {
  const bannerImage =
    data.datoCmsSchoolYearPage.bannerImage != null ? data.datoCmsSchoolYearPage.bannerImage : 'missingImage'

  return (
    <BasicPageTemplate
      title={data.datoCmsSchoolYearPage.title}
      bannerImage={bannerImage}
      body={data.datoCmsSchoolYearPage.body}
    />
  )
}

export default SchoolYearPage

export const query = graphql`
  query SchoolYearPageQuery($slug: String!) {
    datoCmsSchoolYearPage(slug: { eq: $slug }) {
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

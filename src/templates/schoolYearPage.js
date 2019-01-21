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
      body {
        ... on DatoCmsRichText {
          id
          model {
            apiKey
          }
          text
          textNode {
            text
          }
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
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const SummerCampPage = ({ data }) => {
  const bannerImage =
    data.datoCmsSummerCampPage.bannerImage != null ? data.datoCmsSummerCampPage.bannerImage : 'missingImage'

  return (
    <BasicPageTemplate
      title={data.datoCmsSummerCampPage.title}
      bannerImage={bannerImage}
      body={data.datoCmsSummerCampPage.body}
    />
  )
}

export default SummerCampPage

export const query = graphql`
  query SummerCampPageQuery($slug: String!) {
    datoCmsSummerCampPage(slug: { eq: $slug }) {
      title
      bannerImage {
        url
        fluid(imgixParams: { fm: "jpg", auto: "compress", mono: "8026D435", fit: "facearea", w: "1420", h: "100" }) {
          ...GatsbyDatoCmsSizes
        }
      }
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

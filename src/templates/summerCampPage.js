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
        fluid(
          maxWidth: 1200
          maxHeight: 400
          imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "entropy", mono: "14FF5D00" }
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
            fluid(
              maxWidth: 1040
              maxHeight: 400
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

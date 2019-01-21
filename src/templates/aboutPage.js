import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const AboutPage = ({ data }) => {
  const bannerImage = data.datoCmsAboutPage.bannerImage != null ? data.datoCmsAboutPage.bannerImage : 'missingImage'

  return (
    <BasicPageTemplate
      title={data.datoCmsAboutPage.title}
      bannerImage={bannerImage}
      body={data.datoCmsAboutPage.body}
    />
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    datoCmsAboutPage(slug: { eq: $slug }) {
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

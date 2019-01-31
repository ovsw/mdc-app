import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const AboutPage = ({ data }) => {
  const bannerImage = data.datoCmsAboutPage.bannerImage != null ? data.datoCmsAboutPage.bannerImage : 'missingImage'

  const quickLinks = data.datoCmsAboutPage.quickLinks !== [] ? data.datoCmsAboutPage.quickLinks : 'noQuicklinks'

  return (
    <BasicPageTemplate
      title={data.datoCmsAboutPage.title}
      bannerImage={bannerImage}
      body={data.datoCmsAboutPage.body}
      quickLinks={quickLinks}
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
          image {
            url
            fluid(
              maxWidth: 1040
              maxHeight: 500
              imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,lines", mono: "14FF5D00" }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
      quickLinks {
        title
        link
        image {
          url
          fluid(
            maxWidth: 400
            maxHeight: 200
            imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy", mono: "14FF5D00" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

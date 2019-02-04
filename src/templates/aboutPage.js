import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const AboutPage = ({ data }) => {
  const bannerImage = data.largeImageQuery.bannerImage != null ? data.largeImageQuery.bannerImage : 'missingImage'

  const quickLinks = data.mainQuery.quickLinks !== [] ? data.mainQuery.quickLinks : 'noQuicklinks'

  return (
    <BasicPageTemplate
      title={data.mainQuery.title}
      bannerImage={bannerImage}
      body={data.mainQuery.body}
      quickLinks={quickLinks}
    />
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    mainQuery: datoCmsAboutPage(slug: { eq: $slug }) {
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
    largeImageQuery: datoCmsAboutPage(slug: { eq: $slug }) {
      title
      bannerImage {
        url
        fluid(
          maxWidth: 1200
          maxHeight: 769
          imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy", mono: "14FF5D00" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

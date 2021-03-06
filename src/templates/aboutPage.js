import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const AboutPage = ({ data }) => <BasicPageTemplate data={data.datoCmsAboutPage} />

export default AboutPage

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    datoCmsAboutPage(slug: { eq: $slug }) {
      title
      titleContinued
      seoSettings {
        title
        description
      }
      callToActionText
      callToActionLink
      callToActionText2
      callToActionLink2
      embedCodes
      bannerImage {
        url
        portrait: fluid(
          maxWidth: 1200
          maxHeight: 769
          imgixParams: {
            fm: "jpg"
            auto: "enhance,compress"
            fit: "crop"
            crop: "faces,entropy"
            monochrome: "14FF5D00"
          }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      body {
        ... on DatoCmsCollapsible {
          id
          model {
            apiKey
          }
          title
          text
        }
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
              imgixParams: {
                fm: "jpg"
                auto: "enhance,compress"
                fit: "crop"
                crop: "faces,lines"
                monochrome: "14FF5D00"
              }
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
            maxHeight: 300
            imgixParams: {
              fm: "jpg"
              auto: "enhance,compress"
              fit: "crop"
              crop: "faces,entropy"
              monochrome: "14FF5D00"
            }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

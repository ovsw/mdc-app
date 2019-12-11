import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const SummerCampPage = ({ data }) => <BasicPageTemplate data={data.datoCmsSummerCampPage} />

export default SummerCampPage

export const query = graphql`
  query SummerCampPageQuery($slug: String!) {
    datoCmsSummerCampPage(slug: { eq: $slug }) {
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
        ... on DatoCmsVideo {
          id
          videoUrl
          model {
            apiKey
          }
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
                crop: "faces,entropy"
                monochrome: "14FF5D00"
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`

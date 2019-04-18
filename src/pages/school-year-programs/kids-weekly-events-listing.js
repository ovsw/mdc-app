import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const KidsEventsPage = ({ data }) => {
  console.log('test')

  return (
    <>
      <BasicPageTemplate data={data.datoCmsKidsEventsListing} />
    </>
  )
}

export default KidsEventsPage

export const query = graphql`
  query KidsWeeklyEventsQuery {
    datoCmsKidsEventsListing {
      seoSettings {
        title
        description
      }
      bannerImage {
        url
        portrait: fluid(
          maxWidth: 1200
          maxHeight: 769
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
      }
      events {
        title
        date(formatString: "dddd, MMM Do")
        shortDescription
        signUpLink
        coverImage {
          url
          fluid(
            maxWidth: 400
            maxHeight: 400
            imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy", mono: "14FF5D00" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

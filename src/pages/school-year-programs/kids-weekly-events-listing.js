import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const KidsEventsPage = ({ data }) => (
  <>
    <BasicPageTemplate data={data.datoCmsKidsEventsListing} />
  </>
)

export default KidsEventsPage

export const query = graphql`
  query KidsWeeklyEventsQuery {
    datoCmsKidsEventsListing {
      title
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
      }
    }
  }
`
// events {
//   title
//   date1(formatString: "dddd, MMM Do")
//   date2(formatString: "dddd, MMM Do")
//   shortDescription
//   signUpLink1
//   signUpLink2
//   coverImage {
//     url
//     fluid(
//       maxWidth: 400
//       maxHeight: 400
//       imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy", mono: "14FF5D00" }
//     ) {
//       ...GatsbyDatoCmsFluid
//     }
//   }
// }

import React from 'react'
// import Slider from 'react-slick'
// import { HelmetDatoCms } from 'gatsby-source-datocms'
// import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const SummerCampPage = ({ data }) => (
  <>
    <h1>This is a basic page with title: {data.datoCmsSummerCampPage.title}</h1>
    {data.datoCmsSummerCampPage.body.map(block => (
      <div key={block.id}>
        {block.model.apiKey === 'rich_text' && (
          <div
            dangerouslySetInnerHTML={{
              __html: block.text,
            }}
          />
        )}
        {block.model.apiKey === 'image' && <Img fluid={block.image.fluid} style={{ maxWidth: '600px' }} />}
      </div>
    ))}
  </>
)

export default SummerCampPage

export const query = graphql`
  query SummerCampPageQuery($slug: String!) {
    datoCmsSummerCampPage(slug: { eq: $slug }) {
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

import React from 'react'
// import Slider from 'react-slick'
// import { HelmetDatoCms } from 'gatsby-source-datocms'
// import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from 'src/components/layout'

const BasicPage = ({ data }) => (
  <Layout>
    <h1>This is a basic page with title: {data.datoCmsAboutPage.title}</h1>
    {data.datoCmsAboutPage.body.map(block => (
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
  </Layout>
)

export default BasicPage

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    datoCmsAboutPage(slug: { eq: $slug }) {
      title
      body {
        ... on DatoCmsRichText {
          model {
            apiKey
          }
          text
          textNode {
            text
          }
        }
        ... on DatoCmsImage {
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

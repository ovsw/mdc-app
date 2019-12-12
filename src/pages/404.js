import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PageSection from 'src/components/Content/PageSection'
import MainContentWrapper from 'src/components/Content/MainContentWrapper'
import NarrowContent from 'src/components/common/NarrowContent'
import MainHeading from 'src/components/Content/MainHeading'
import RichTextBlock from 'src/components/Content/RichTextBlock'
import ImageBlock from 'src/components/Content/ImageBlock'

import BannerImage from 'src/components/Content/BannerImage'

import BasicPageTemplate from 'src/components/Templates/BasicPageTemplate'

const BasicPageContentSection = styled(PageSection)`
  ${tw`pt-px pb-px`};
  & p:last-child {
    margin-bottom: 0 !important;
  }
`

const NotFoundPage = ({ data }) => <BasicPageTemplate data={data.datoCmsErrorPage} />

export default NotFoundPage

export const query = graphql`
  query FourZeroFourQuery {
    datoCmsErrorPage {
      title
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
            mono: "14FF5D00"
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
                mono: "14FF5D00"
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

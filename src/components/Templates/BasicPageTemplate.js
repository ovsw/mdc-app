import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import styled from 'styled-components'
import PageSection from 'src/components/Content/PageSection'

import BannerImage from 'src/components/Content/BannerImage'
import MainContentWrapper from 'src/components/Content/MainContentWrapper'
import NarrowContent from 'src/components/common/NarrowContent'
import MainHeading from 'src/components/Content/MainHeading'
import RichTextBlock from 'src/components/Content/RichTextBlock'
import QuoteBlock from 'src/components/Content/QuoteBlock'
import ImageBlock from 'src/components/Content/ImageBlock'
import BlockLink from 'src/components/Content/BlockLinks/BlockLinks'
import CTAWrapper from 'src/components/CTAWrapper'
import CTAMobileBtn from 'src/components/CTAMobileBtn'
import KidsEvents from 'src/components/KidsEvents'
import VideoBlock from 'src/components/Content/VideoBlock'

const BasicPageContentSection = styled(PageSection)`
  ${tw`pt-px pb-px`};
  min-height: 800px;
  & p:last-child {
    margin-bottom: 0 !important;
  }
`

const BasicPageTemplate = ({
  data: {
    title,
    titleContinued,
    seoSettings,
    longDate,
    bannerImage,
    body,
    quickLinks,
    callToActionText,
    callToActionLink,
    callToActionText2,
    callToActionLink2,
    embedCodes,
    events,
  },
}) => {
  console.log('')
  return (
    <>
      {seoSettings && (
        <HelmetDatoCms>
          {seoSettings.title && <title>{seoSettings.title}</title>}
          {seoSettings.description && <meta name="description" content={seoSettings.description} />}
        </HelmetDatoCms>
      )}
      <BannerImage image={bannerImage} quickLinks={callToActionText} />

      <MainContentWrapper>
        <BasicPageContentSection bottomTexture>
          <NarrowContent>
            <MainHeading>
              {title}
              {titleContinued && <br />}
              {titleContinued}
            </MainHeading>
            {longDate && <p className=" text-sm font-bold">{longDate}</p>}
          </NarrowContent>

          {body.map(block => (
            <div key={block.id}>
              {block.model.apiKey === 'rich_text' && <RichTextBlock block={block} />}
              {block.model.apiKey === 'quote' && <QuoteBlock block={block} />}
              {block.model.apiKey === 'image' && <ImageBlock block={block} />}
              {block.model.apiKey === 'video' && <VideoBlock block={block} />}
            </div>
          ))}

          {quickLinks && <BlockLink items={quickLinks} />}

          {events && <KidsEvents events={events} />}
          <NarrowContent>
            <div
              className="hidden md:block"
              dangerouslySetInnerHTML={{
                __html: embedCodes,
              }}
            />
          </NarrowContent>
        </BasicPageContentSection>
      </MainContentWrapper>
      {(callToActionLink || callToActionLink2) && (
        <CTAWrapper>
          {callToActionText && <CTAMobileBtn to={callToActionLink}>{callToActionText}</CTAMobileBtn>}
          {callToActionText2 && <CTAMobileBtn to={callToActionLink2}>{callToActionText2}</CTAMobileBtn>}
        </CTAWrapper>
      )}
    </>
  )
}

export default BasicPageTemplate

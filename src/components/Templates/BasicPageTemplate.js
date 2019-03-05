import React from 'react'

import BannerImage from 'src/components/Content/BannerImage'
import MainContentWrapper from 'src/components/Content/MainContentWrapper'
import NarrowContent from 'src/components/common/NarrowContent'
import MainHeading from 'src/components/Content/MainHeading'
import RichTextBlock from 'src/components/Content/RichTextBlock'
import QuoteBlock from 'src/components/Content/QuoteBlock'
import ImageBlock from 'src/components/Content/ImageBlock'
import CtaBlock from 'src/components/Content/CtaBlock'
import BigLinkBlock from 'src/components/Content/BigLinkBlock'
import BlockLink from 'src/components/Content/BlockLinks/BlockLinks'
import CTAWrapper from 'src/components/CTAWrapper'
import CTAMobileBtn from 'src/components/CTAMobileBtn'
import KidsEvents from 'src/components/KidsEvents'

const BasicPageTemplate = ({
  data: {
    title,
    bannerImage,
    body,
    quickLinks,
    bodyContinued,
    callToActionText,
    callToActionLink,
    callToActionText2,
    callToActionLink2,
    embedCodes,
    events,
  },
}) => (
  <>
    <BannerImage image={bannerImage} />

    <MainContentWrapper className="rteWrapper">
      <NarrowContent>
        <MainHeading>{title}</MainHeading>
      </NarrowContent>

      {body.map(block => (
        <div key={block.id}>
          {block.model.apiKey === 'rich_text' && <RichTextBlock block={block} />}

          {block.model.apiKey === 'quote' && <QuoteBlock block={block} />}

          {block.model.apiKey === 'image' && <ImageBlock block={block} />}
        </div>
      ))}

      {quickLinks && <BlockLink items={quickLinks} />}

      {bodyContinued &&
        bodyContinued.map(block => (
          <div key={block.id}>
            {block.model.apiKey === 'rich_text' && <RichTextBlock block={block} />}

            {block.model.apiKey === 'big_link' && (
              <CtaBlock>
                <BigLinkBlock block={block} />
              </CtaBlock>
            )}
          </div>
        ))}

      {events && <KidsEvents events={events} />}

      <div
        dangerouslySetInnerHTML={{
          __html: embedCodes,
        }}
      />
    </MainContentWrapper>
    {callToActionLink && (
      <CTAWrapper>
        <CTAMobileBtn to={callToActionLink}>{callToActionText}</CTAMobileBtn>
        {callToActionText2 && <CTAMobileBtn to={callToActionLink2}>{callToActionText2}</CTAMobileBtn>}
      </CTAWrapper>
    )}
  </>
)

export default BasicPageTemplate

import React from 'react'

import BannerImage from 'src/components/Content/BannerImage'
import MainContentWrapper from 'src/components/Content/MainContentWrapper'
import MainHeading from 'src/components/Content/MainHeading'
import RichTextBlock from 'src/components/Content/RichTextBlock'
import QuoteBlock from 'src/components/Content/QuoteBlock'
import ImageBlock from 'src/components/Content/ImageBlock'
import CtaBlock from 'src/components/Content/CtaBlock'
import BigLinkBlock from 'src/components/Content/BigLinkBlock'
import BlockLink from 'src/components/Content/BlockLinks/BlockLinks'

const BasicPageTemplate = ({ data: { title, bannerImage, body, quickLinks, bodyContinued } }) => (
  <>
    <BannerImage image={bannerImage} />

    <MainContentWrapper className="rteWrapper">
      <MainHeading>{title}</MainHeading>

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
    </MainContentWrapper>
  </>
)

export default BasicPageTemplate

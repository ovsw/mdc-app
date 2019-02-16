import React from 'react'
import { Link } from 'gatsby'
// import Slider from 'react-slick'
import Img from 'gatsby-image'
import RichTextBlock from 'src/components/Content/RichTextBlock'
import QuoteBlock from 'src/components/Content/QuoteBlock'
import CtaBlock from 'src/components/Content/CtaBlock'
import BigLinkBlock from 'src/components/Content/BigLinkBlock'
import BlockLink from 'src/components/Content/BlockLinks/BlockLinks'

const BasicPageTemplate = ({ data: { title, bannerImage, body, quickLinks, bodyContinued } }) => (
  <div className="m-t-navbar">
    <div className="xl:fixed xl:w-1/2 xl:pin-r xl:bg-grey xl:h-full">
      {/* <img src={`${data.datoCmsAboutPage.bannerImage.url}?auto=compress&fit=facearea&h=400&w=1200`} /> */}
      {bannerImage && (
        <Img fluid={bannerImage.portrait} className="border border-b-8 xl:h-full" style={{ borderColor: '#1c944c' }} />
      )}
    </div>

    <div className="mainContentWrapper rteWrapper text-green-body xl:w-1/2 xl:mr-auto">
      <div className="container mx-auto">
        <div className="narrowContent md:mb-0 lg:pb-2">
          <h1 className="mainHeading">
            <span>{title}</span>
          </h1>
        </div>
      </div>

      {body.map(block => (
        <div key={block.id}>
          {block.model.apiKey === 'rich_text' && <RichTextBlock htmlText={block.text} />}

          {block.model.apiKey === 'quote' && <QuoteBlock htmlText={block.text} />}

          {block.model.apiKey === 'image' && (
            <div
              className="container mx-auto md:px-8 xl:px-16"
              style={block.image.width < block.image.height ? { paddingLeft: '8rem', paddingRight: '8rem' } : {}}
            >
              <figure className="contentImage">
                <Img fluid={block.image.fluid} />
                <figcaption>{block.caption}</figcaption>
              </figure>
            </div>
          )}
        </div>
      ))}

      {quickLinks && <BlockLink items={quickLinks} />}

      {bodyContinued &&
        bodyContinued.map(block => (
          <div key={block.id}>
            {block.model.apiKey === 'rich_text' && <RichTextBlock htmlText={block.text} />}

            {block.model.apiKey === 'big_link' && (
              <CtaBlock>
                <BigLinkBlock block={block} />
              </CtaBlock>
            )}
          </div>
        ))}
    </div>
  </div>
)

export default BasicPageTemplate

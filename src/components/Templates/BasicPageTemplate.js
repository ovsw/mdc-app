import React from 'react'
// import Slider from 'react-slick'

import Img from 'gatsby-image'

const AboutPage = ({ title, bannerImage, body }) => (
  <div className="mt-24">
    {/* <img src={`${data.datoCmsAboutPage.bannerImage.url}?auto=compress&fit=facearea&h=400&w=1200`} /> */}
    {bannerImage != 'missingImage' && <Img fluid={bannerImage.fluid} />}

    <div className="mainContentWrapper" style={{ background: 'url()' }}>
      <div className="container mx-auto">
        <h1 className="narrowContent">{title}</h1>
      </div>

      {body.map(block => (
        <div key={block.id}>
          {block.model.apiKey === 'rich_text' && (
            <div className="container mx-auto">
              <div
                className="narrowContent"
                dangerouslySetInnerHTML={{
                  __html: block.text,
                }}
              />
            </div>
          )}

          {block.model.apiKey === 'quote' && (
            <div className="container mx-auto narrowContent">
              <blockquote>
                <span className="bqstart">“</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: block.text,
                  }}
                />
                <span className="bqend">”</span>
              </blockquote>
            </div>
          )}

          {block.model.apiKey === 'image' && <Img fluid={block.image.fluid} className="container mx-auto mb-8" />}
        </div>
      ))}
    </div>
  </div>
)

export default AboutPage

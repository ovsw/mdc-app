import React from 'react'
// import Slider from 'react-slick'

import Img from 'gatsby-image'

const AboutPage = ({ title, bannerImage, body }) => (
  <div className="mt-24">
    {/* <img src={`${data.datoCmsAboutPage.bannerImage.url}?auto=compress&fit=facearea&h=400&w=1200`} /> */}
    {bannerImage != 'missingImage' && <Img fluid={bannerImage.fluid} className="border border-b-8 border-green" />}

    <div className="mainContentWrapper text-green-body">
      <div className="container mx-auto">
        <h1 className="mainHeading">
          <span>{title}</span>
        </h1>
      </div>

      {body.map(block => (
        <div key={block.id}>
          {block.model.apiKey === 'rich_text' && (
            <div className="container mx-auto xxl:px-32">
              <div
                className="narrowContent bg-grey-lightest sm:box-shadow-md-yellow-highlight"
                dangerouslySetInnerHTML={{
                  __html: block.text,
                }}
              />
            </div>
          )}

          {block.model.apiKey === 'quote' && (
            <div className="container mx-auto">
              <div className="pullQuoteWrapper">
                <blockquote className="pullQuote">
                  <span className="bqstart">“</span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: block.text,
                    }}
                  />
                  {/* <span className="bqend">”</span> */}
                </blockquote>
              </div>
            </div>
          )}

          {block.model.apiKey === 'image' && (
            <div className="container mx-auto xl:px-16">
              <Img fluid={block.image.fluid} className="contentImage" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default AboutPage

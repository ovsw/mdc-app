import React from 'react'
import { Link } from 'gatsby'
import QuickLink from 'src/components/QuickLink/QuickLink'
// import Slider from 'react-slick'

import Img from 'gatsby-image'

const AboutPage = ({ title, bannerImage, body, quickLinks }) => (
  <div className="m-t-navbar">
    <div className="xl:fixed xl:w-1/2 xl:pin-r xl:bg-grey xl:h-full">
      {/* <img src={`${data.datoCmsAboutPage.bannerImage.url}?auto=compress&fit=facearea&h=400&w=1200`} /> */}
      {bannerImage != 'missingImage' && (
        <Img fluid={bannerImage.fluid} className="border border-b-8 xl:h-full" style={{ borderColor: '#1c944c' }} />
      )}
    </div>

    <div className="mainContentWrapper rteWrapper text-green-body xl:w-1/2 xl:mr-auto">
      <div className="container mx-auto">
        <h1 className="mainHeading">
          <span>{title}</span>
        </h1>
      </div>

      {body.map(block => (
        <div key={block.id}>
          {block.model.apiKey === 'rich_text' && (
            <div className="container mx-auto">
              <div
                className="narrowContent sm:box-shadow-md-yellow-highlight"
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

      {quickLinks != undefined && (
        <div className="container mx-auto flex flex-wrap justify-around mb-10 -px-1">
          {quickLinks.map((item, index) => (
            <QuickLink item={item} key={index} />
          ))}
        </div>
      )}
    </div>
  </div>
)

export default AboutPage

import React from 'react'
import { Link } from 'gatsby'
// import Slider from 'react-slick'

import Img from 'gatsby-image'

const AboutPage = ({ title, bannerImage, body, quickLinks }) => {
  console.log(quickLinks)
  return (
    <div className="mt-24">
      {/* <img src={`${data.datoCmsAboutPage.bannerImage.url}?auto=compress&fit=facearea&h=400&w=1200`} /> */}
      {bannerImage != 'missingImage' && (
        <Img fluid={bannerImage.fluid} className="border border-b-8" style={{ borderColor: '#1c944c' }} />
      )}

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

        {quickLinks != undefined && (
          <div className="container mx-auto flex flex-wrap justify-around mb-10 -px-1">
            {quickLinks.map((item, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-1">
                <Link
                  to={`/summer-camp/programs/${item.link.slug}`}
                  className="block mx-auto overflow-hidden sm:box-shadow-md-yellow-highlight bg-white max-w-full mb-2 md:mb-8 md:mx-2  bg-white hover:text-yellow hover:bg-green no-underline"
                  style={{ color: '#1c944c' }}
                >
                  <Img className="w-full" fluid={item.image.fluid} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <div className="">Details</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AboutPage

import React from 'react'
// import Slider from 'react-slick'

import Img from 'gatsby-image'

const AboutPage = ({ title, bannerImage, body }) => (
  <div className="mt-24">
    {/* <img src={`${data.datoCmsAboutPage.bannerImage.url}?auto=compress&fit=facearea&h=400&w=1200`} /> */}
    {bannerImage != 'missingImage' && <Img fluid={bannerImage.fluid} />}
    <div className="px-6 md:px-8 xl:px-16 mt-4 mx-auto" style={{ background: 'url()' }}>
      <h1>This is a basic page with title: {title}</h1>
      {body.map(block => (
        <div key={block.id}>
          {block.model.apiKey === 'rich_text' && (
            <div className="container mx-auto">
              <div
                className="px-2 md:px-16 lg:px-32 mx-12"
                dangerouslySetInnerHTML={{
                  __html: block.text,
                }}
              />
            </div>
          )}
          {block.model.apiKey === 'image' && <Img fluid={block.image.fluid} className="container mx-auto mb-8" />}
        </div>
      ))}
    </div>
  </div>
)

export default AboutPage

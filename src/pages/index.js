import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSun, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons'

import MainSlideshow from 'src/components/MainSlideshow'
import MainBannerWrapper from 'src/components/Content/MainBannerWrapper'
import MainContentWrapper from 'src/components/Content/MainContentWrapper'
import HomePageSection from 'src/components/Content/HomePageSection'
import NarrowContent from 'src/components/common/NarrowContent'
import MainHeading from 'src/components/Content/MainHeading'
import CtaBlock from 'src/components/Content/CtaBlock'
import Countdown from 'src/components/Countdown'
import BlockLinks from 'src/components/Content/BlockLinks/BlockLinks'
import TestimonialSliders from 'src/components/TestimonialSliders'
import RecentNews from 'src/components/News/RecentNewsListing'
import Accordion from 'src/components/Content/Accordion/Accordion'

import { NavContext } from 'src/layouts'

// import IconUkulele from 'src/icons/ukulele'

const IndexPage = ({ data }) => (
  // const currentDate = new Date()
  // const year =
  //   currentDate.getMonth() === 6 && currentDate.getDate() > 22
  //     ? currentDate.getFullYear() + 1
  //     : currentDate.getFullYear()

  // console.log(`${year}-06-24T00:00:00`)

  <>
    <HelmetDatoCms>
      <title>{data.datoCmsHome.seoSettings.title}</title>
      <meta name="description" content={data.datoCmsHome.seoSettings.description} />
    </HelmetDatoCms>
    <MainBannerWrapper>
      <MainSlideshow slides={data.datoCmsHome.heroSlideshow} />
    </MainBannerWrapper>

    <MainContentWrapper>
      <HomePageSection bottomTexture>
        {/* <IconUkulele width="200" height="200" className="iconhover" /> */}
        <NarrowContent>
          <MainHeading>Maplewood Country Day Camp & Enrichment Center</MainHeading>
        </NarrowContent>

        <NarrowContent className="md:mb-0 md:pb-0">
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsHome.introText,
            }}
          />
        </NarrowContent>
      </HomePageSection>

      <NavContext.Consumer>
        {({ toggleEnrollNowOverlay }) => (
          <CtaBlock>
            <Countdown date="2020-06-22T00:00:00" toggleDatesRatesOverlay={toggleEnrollNowOverlay} />
          </CtaBlock>
        )}
      </NavContext.Consumer>

      <HomePageSection topTexture bottomTexture>
        <NarrowContent>
          <MainHeading h2 centered>
            <FontAwesomeIcon icon={faSun} fixedWidth size="1x" /> The fun doesn't end with the summer
          </MainHeading>
          <p className="text-center">At Maplewood we offer both Summer Camp and School Year programs!</p>
        </NarrowContent>

        <BlockLinks items={data.datoCmsHome.sectionLinks} />
      </HomePageSection>

      <HomePageSection alternate>
        <NarrowContent className="md:mb-0 lg:pb-2">
          <MainHeading h2 centered>
            <FontAwesomeIcon icon={faHeart} fixedWidth size="1x" /> What our families say:
          </MainHeading>
        </NarrowContent>
        <TestimonialSliders testimonials={data.datoCmsHome.testimonials} />
      </HomePageSection>

      <HomePageSection topTexture bottomTexture className="-mt-16">
        <NarrowContent className="md:mb-0 lg:pb-2">
          <MainHeading h2 centered>
            <FontAwesomeIcon icon={faNewspaper} fixedWidth size="1x" /> Latest News:
          </MainHeading>
          <RecentNews articles={data.allDatoCmsNewsArticle} />
        </NarrowContent>
      </HomePageSection>

      {/* <Accordion panels={panels} /> */}
    </MainContentWrapper>
  </>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      seoSettings {
        title
        description
        twitterCard
      }
      introText
      heroSlideshow {
        slideTitle
        buttonText
        buttonLinkUrl
        image {
          url
          fluid(
            maxWidth: 1200
            maxHeight: 768
            imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
      sectionLinks {
        title
        link
        image {
          url
          fluid(
            maxWidth: 600
            maxHeight: 400
            imgixParams: {
              fm: "jpg"
              auto: "enhance,compress"
              fit: "crop"
              crop: "faces,entropy"
              monochrome: "14FF5D00"
            }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
      testimonials {
        body
        author
        image {
          url
          fixed(
            width: 1060
            height: 500
            imgixParams: {
              fm: "jpg"
              auto: "enhance,compress"
              fit: "crop"
              crop: "faces,entropy"
              monochrome: "14FF5D00"
            }
          ) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
    }
    allDatoCmsNewsArticle(sort: { fields: [date], order: DESC }, limit: 3) {
      edges {
        node {
          title
          slug
          shortDate: date(formatString: "dddd, MMM Do")
          bannerImage {
            url
            fluid(
              maxWidth: 450
              maxHeight: 450
              imgixParams: {
                fm: "jpg"
                auto: "enhance,compress"
                fit: "crop"
                crop: "faces,lines"
                monochrome: "14FF5D00"
              }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
          excerpt
        }
      }
    }
  }
`

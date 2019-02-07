import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import MainSlideshow from 'src/components/MainSlideshow/MainSlideshow'
import Countdown from 'src/components/Countdown/Countdown'
import SectionLinks from 'src/components/SectionLinks/SectionLinks'

import { NavContext } from 'src/layouts'

import IconUkulele from 'src/icons/ukulele'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      something: true,
    }
  }

  render() {
    const {
      props: { data },
    } = this

    const currentDate = new Date()
    const year =
      currentDate.getMonth() === 6 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear()

    // console.log(`${year}-06-24T00:00:00`)

    return (
      <div className="m-t-navbar">
        <div className="xl:fixed xl:w-1/2 xl:pin-r xl:bg-grey xl:h-full">
          <MainSlideshow slides={data.datoCmsHome.heroSlideshow} />
        </div>

        <div className="mainContentWrapper xl:w-1/2 xl:mr-auto">
          {/* <IconUkulele width="200" height="200" className="iconhover" /> */}

          <div className="container mx-auto">
            <div className="narrowContent md:mb-0 md:pb-0">
              <h1 className="mainHeading">
                <span>Maplewood Country Day Camp & Enrichment Center</span>
              </h1>
            </div>
          </div>

          <div className="container mx-auto py-px pb-0 mb-0">
            <div
              className="narrowContent md:mb-0 md:pb-0"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsHome.introText,
              }}
            />
          </div>
          <NavContext.Consumer>
            {({ toggleDatesRatesOverlay }) => (
              <Countdown date={`${year}-06-24T00:00:00`} toggleDatesRatesOverlay={toggleDatesRatesOverlay} />
            )}
          </NavContext.Consumer>
          <SectionLinks items={data.datoCmsHome.sectionLinks} />
        </div>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
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
            imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy", mono: "14FF5D00" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

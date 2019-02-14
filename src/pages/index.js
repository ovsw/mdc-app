import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import MainSlideshow from 'src/components/MainSlideshow/MainSlideshow'
import Countdown from 'src/components/Countdown/Countdown'
import SectionLinks from 'src/components/SectionLinks/SectionLinks'
import Accordion from 'src/components/Accordion/Accordion'

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
          <section className="container mx-auto mb-16 lg:px-8">
            <div className="narrowContent md:mb-0 lg:pb-2 ">
              <h2 className="mainHeading">
                <span>The fun doesn't end with the summer</span>
              </h2>
            </div>
            <div className="narrowContent mb-0 pb-0">
              <p>At Maplewood we offer both summer camp and School Year programs!</p>
            </div>
            <SectionLinks items={data.datoCmsHome.sectionLinks} />
          </section>
          {/* <Accordion panels={panels} /> */}
        </div>
      </div>
    )
  }
}

const panels = [
  {
    label: "Seriously, Don't Use Icon Fonts",
    content:
      'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    label: 'Screen Readers Actually Read That Stuff',
    content:
      'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    label: 'They Fail Poorly and Often',
    content:
      'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
  {
    label: "They're a Nightmare if You're Dyslexic",
    content:
      "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
  },
  {
    label: "There's Already a Better Way",
    content:
      "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
  },
]

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

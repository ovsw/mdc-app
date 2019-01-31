import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import MainSlideshow from 'src/components/MainSlideshow/MainSlideshow'

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
      state: { something },
      props: { data },
    } = this

    return (
      <div className="m-t-navbar">
        <MainSlideshow slides={data.datoCmsHome.heroSlideshow} />
        <div className="mainContentWrapper">
          {/* <IconUkulele width="200" height="200" className="iconhover" /> */}
          <div
            className="narrowContent bg-grey-lightest sm:box-shadow-md-yellow-highlight"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsHome.introText,
            }}
          />
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
            maxHeight: 400
            imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,entropy" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

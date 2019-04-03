import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const LightBoxWrapper = styled.div`
  ${tw`fixed pin flex items-center justify-center`};
  z-index: 11;
  padding-top: 127px;
`
const ContentWrapper = styled.div`
  ${tw`bg-white rounded flex relative p-4`};
  ${tw` flex-col md:flex-row`};
  max-height: 90%;
  width: 95%;
  ${media.md`width: 700px;`};
  ${media.lg`width: 800px;`};
  ${media.xl`width: 1000px;`}
  z-index: 12;
`
const CurrentImage = styled(Img)`
  ${tw` w-full md:w-1/2`};
`
const RightColumn = styled.div`
  ${tw`md:w-1/2 p-4 text-sm`};
`
const ThumbnailWrapper = styled.div`
  ${tw`flex flex-wrap`};
`
const ThumbImage = styled(Img)`
  ${tw`w-12 xl:w-16 m-px cursor-pointer`};
`
const LightBoxBg = styled.div`
  ${tw`absolute pin`};
  background: rgba(15, 31, 5, 0.62);
  z-index: 11;
`
const CloseIcon = styled(FontAwesomeIcon)`
  ${tw`absolute cursor-pointer`};
  color: ${props => props.theme.primaryColor};
  bottom: 1rem;
  right: 0.75rem;
  ${media.md`top: 1rem;`};
`

class LightBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeImage: 0,
    }

    this.getCurrImage = (e, index) => {
      e.preventDefault()
      console.log('index', index)
      console.log('before', this.state.activeImage)
      this.setState({ activeImage: index }, function() {
        console.log('after', this.state.activeImage)
      })
    }
  }

  render() {
    const {
      content: { title, desc, images },
      closeLightBox,
    } = this.props

    const { activeImage } = this.state

    return (
      // console.log(props)
      <LightBoxWrapper>
        <LightBoxBg onClick={closeLightBox} />
        <ContentWrapper>
          <CloseIcon icon={faTimesCircle} fixedWidth size="2x" onClick={closeLightBox} />
          <CurrentImage fluid={images[activeImage].large} />
          <RightColumn>
            <h2>{title}</h2>
            <div
              className="hidden md:block"
              dangerouslySetInnerHTML={{
                __html: desc,
              }}
            />
            <ThumbnailWrapper>
              {images.map((image, index) => (
                <a url={image.url} key={image.url} onClick={e => this.getCurrImage(e, index)}>
                  <ThumbImage fluid={image.thumb} />
                </a>
              ))}
            </ThumbnailWrapper>
          </RightColumn>
          {/* <button type="button" onClick={closeLightBox}>
        Close
      </button> */}
        </ContentWrapper>
      </LightBoxWrapper>
    )
  }
}

export default LightBox

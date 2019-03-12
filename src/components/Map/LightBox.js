import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ContentWrapper = styled.div`
  ${tw`bg-white rounded flex w-2/3 relative p-4`};
  z-index: 12;
`
const CurrentImage = styled(Img)`
  ${tw`w-1/2`};
`
const RightColumn = styled.div`
  ${tw`w-1/2 p-4`};
`
const ThumbnailWrapper = styled.div`
  ${tw`flex`};
`
const ThumbImage = styled(Img)`
  ${tw` w-16 h-16`};
`
const LightBoxWrapper = styled.div`
  ${tw`fixed pin flex items-center justify-center`};
  z-index: 11;
`
const LightBoxBg = styled.div`
  ${tw`absolute pin`};
  background: rgba(15, 31, 5, 0.62);
  z-index: 11;
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
          <CurrentImage fluid={images[activeImage].large} />
          <RightColumn>
            <h2>{title}</h2>
            <div
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

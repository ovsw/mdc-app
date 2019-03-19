import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

const VideoWrapper = styled.div`
  ${tw`relative`};
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;

  iframe {
    ${tw`absolute pin w-full h-full`};
  }
`

const VideoBlock = ({ block }) => {
  let videoId = block.videoUrl.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }

  const Container = styled.div`
    ${tw`container mx-auto mb-8 px-4`};
  `

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  }
  return (
    <Container>
      <VideoWrapper>
        <YouTube videoId={videoId} opts={opts} />
      </VideoWrapper>
    </Container>
  )
}

export default VideoBlock

import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import getVideoId from 'get-video-id'
import VimeoPlayer from '@u-wave/react-vimeo'

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
  const { id, service } = getVideoId(block.videoUrl)

  const Container = styled.div`
    ${tw`container mx-auto mb-8 px-4`};
  `

  const youtubeOpts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  }

  const videoEmbed = service === 'youtube' ? (<YouTube videoId={id} opts={youtubeOpts} />) : (<VimeoPlayer video={id} style={{textAlign: 'center', width: '100%'}} />)

  return (
    <Container>
      <VideoWrapper>
        {videoEmbed}
      </VideoWrapper>
    </Container>
  )
}

export default VideoBlock

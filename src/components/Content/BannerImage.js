import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import MainBannerWrapper from 'src/components/Content/MainBannerWrapper'

const BannerImageStyled = styled(Img)`
  ${tw`xl:h-full`};
`

const BannerImage = ({ image }) => (
  <MainBannerWrapper>
    {/* <img src={`${data.datoCmsAboutPage.bannerImage.url}?auto=compress&fit=facearea&h=400&w=1200`} /> */}
    {image && <BannerImageStyled fluid={image.portrait} />}
  </MainBannerWrapper>
)

export default BannerImage

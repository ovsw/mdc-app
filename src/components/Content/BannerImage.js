import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import MainBannerWrapper from 'src/components/Content/MainBannerWrapper'

const BannerImageStyled = styled(Img)`
  ${tw`border border-b-8 xl:h-full`};
  bordercolor: '#1c944c';
`

const BannerImage = ({ image }) => (
  <MainBannerWrapper>
    {/* <img src={`${data.datoCmsAboutPage.bannerImage.url}?auto=compress&fit=facearea&h=400&w=1200`} /> */}
    {image && <BannerImageStyled fluid={image.portrait} />}
  </MainBannerWrapper>
)

export default BannerImage

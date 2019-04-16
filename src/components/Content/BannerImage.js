import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import MainBannerWrapper from 'src/components/Content/MainBannerWrapper'

import LoaderImage from 'src/images/loader.gif'

const BannerImageStyled = styled(Img)`
  ${tw`xl:h-full`};
  background-image: url('${LoaderImage}');
  background-position: 50% 40%;
  background-repeat: no-repeat;
`

const BannerImage = ({ image, quickLinks }) => (
  <MainBannerWrapper withQuickLinks={quickLinks}>
    {/* <img src={`${data.datoCmsAboutPage.bannerImage.url}?auto=compress&fit=facearea&h=400&w=1200`} /> */}
    {image && <BannerImageStyled fluid={image.portrait} />}
  </MainBannerWrapper>
)

export default BannerImage

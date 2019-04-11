import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const MainBannerWrapperStyled = styled.div`
  ${tw`xl:fixed xl:w-1/2 xl:pin-r xl:h-full`};
  ${tw`border border-b-2`};
  ${media.xl`padding-bottom: ${props => (props.withQuickLinks ? '280px' : '0px')};`}

  border-color: white;
  ${media.xl`border:none; border-left: 3px solid white`}
`
const MainBannerWrapper = ({ withQuickLinks, children }) => (
  <MainBannerWrapperStyled withQuickLinks={withQuickLinks}>{children}</MainBannerWrapperStyled>
)

export default MainBannerWrapper

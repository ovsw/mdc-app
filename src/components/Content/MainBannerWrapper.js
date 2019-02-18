import React from 'react'
import styled from 'styled-components'

const MainBannerWrapperStyled = styled.div`
  ${tw`xl:fixed xl:w-1/2 xl:pin-r xl:bg-grey xl:h-full`};
`
const MainBannerWrapper = ({ children }) => <MainBannerWrapperStyled>{children}</MainBannerWrapperStyled>

export default MainBannerWrapper

import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import NarrowContent from 'src/components/common/NarrowContent'

const MainHeadingStyled = styled.h1`
  ${tw`mt-10 mb-0`};
  color: ${props => props.theme.primaryColor};
  ${media.md`${tw`text-center mt-16 mb-10`};`};
`

const MainContent = ({ children }) => (
  <NarrowContent className="md:mb-0 lg:pb-2">
    <MainHeadingStyled className="mainHeading">{children}</MainHeadingStyled>
  </NarrowContent>
)

export default MainContent

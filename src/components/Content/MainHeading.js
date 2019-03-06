import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const MainHeadingStyled = styled.h1`
  ${tw`mt-10 mb-0`};
  color: ${props => props.theme.primaryColor};
  ${media.md`${tw`mt-16 mb-10`};`};
`
const SubHeadingStyled = styled.h2`
  ${tw`mt-10 mb-6`};
  color: ${props => props.theme.primaryColor};
  ${media.md`${tw`text-center mt-16 mb-10`};`};
`

const MainContent = ({ children, h2 }) => {
  let out = ''
  if (h2 === true) {
    out = <SubHeadingStyled className="mainHeading">{children}</SubHeadingStyled>
  } else {
    out = <MainHeadingStyled className="mainHeading">{children}</MainHeadingStyled>
  }

  return out
}

export default MainContent

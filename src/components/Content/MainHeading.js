import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const MainHeadingStyled = styled.h1`
  ${tw`mt-10 mb-0`};
  color: ${props => props.theme.primaryColor};
  ${media.md`${tw`mt-16 mb-10`};`};
  ${props => (props.centered ? 'text-align:center' : '')}
`
const SubHeadingStyled = styled.h2`
  ${tw`mt-10 mb-6`};
  color: ${props => props.theme.primaryColor};
  ${media.md`${tw`mt-16 mb-10`};`};
  ${props => (props.centered ? 'text-align:center' : '')}
`

const MainContent = ({ h2, children, ...otherProps }) => {
  let out = ''
  if (h2 === true) {
    out = <SubHeadingStyled {...otherProps}>{children}</SubHeadingStyled>
  } else {
    out = <MainHeadingStyled {...otherProps}>{children}</MainHeadingStyled>
  }

  return out
}

export default MainContent

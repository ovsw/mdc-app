import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const NarrowContentStyled = styled.div`
  ${tw`px-4 mb-8 pb-px;`};
  ${media.md`${tw`mx-0 px-16`}`};
  ${media.lg`
    ${tw`px-8 py-0`};
    margin-left: 10%;
    margin-right:  10%;
  `};
  ${media.xl`
    margin-left: 5%;
    margin-right: 5%;
  `};
  ${media.xxl`
    max-width: 750px;
    margin-left: auto;
    margin-right: auto; 
  `};
`

const NarrowContent = ({ children }) => <NarrowContentStyled>{children}</NarrowContentStyled>

export default NarrowContent

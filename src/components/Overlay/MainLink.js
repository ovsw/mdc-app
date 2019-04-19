import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const MainLinkStyled = styled.div`
  ${tw`flex-grow flex items-center text-white text-sm items-stretch text-center`};
  ${tw`border-white border-t-2 border-r-2`};
  width: ${props => (props.ofTwo ? '100%' : '50%')};
  background-position: center center;
  background-size: cover;
  &:last-child {
    border-right: none;
  }
  ${media.md`width: 50%`};
  

  background-image: url('${props => props.bgImage}');

  a {
    ${tw`flex flex-1 items-center text-center justify-center no-underline`};
    background-color: rgba(0, 102, 0, 0.7);

    &:hover {
      color: yellow;
      background-color: rgba(0, 102, 0, 0.6);
    }
  }
`

const MainLink = ({ bgImage, ofTwo, children }) => (
  <MainLinkStyled bgImage={bgImage} ofTwo={ofTwo}>
    {children}
  </MainLinkStyled>
)

export default MainLink

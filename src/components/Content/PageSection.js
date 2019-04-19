import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

import LightTexture from 'src/images/paint-border-texture-light.png'
import LightTextureBotom from 'src/images/paint-border-texture-light-bottom.png'
import LightTextureTop from 'src/images/paint-border-texture-light-top.png'

const PageSectionStyled = styled.div`
  ${tw`relative py-10 md:py-16`};
  background-color: ${props => (props.alternate ? props.theme.lightColorAlt : props.theme.lightColor)};
  border-top: ${props => (props.bordered ? '1px solid #006600' : 'none')};
  ${props => props.topTexture ? 'padding-top: 3rem!important;': ''};
  padding-bottom: 1rem!important;
  ${media.md`padding-bottom: 3rem!important;`};
  /* background-image: ${props => props.divider ? 'url('+LightTexture+')' : 'none' }; */
  
  &::after {
    ${tw`absolute w-full`};
    background-size: 1000px auto;
    z-index: 1;
    height: 50px;
    background-repeat: repeat-x;
    background-position: bottom right;
    background-image: url(${LightTextureBotom});
    bottom: -32px;
    left: 0;
  }

  &::before {
    ${tw`absolute w-full`};
    background-size: 1000px auto;
    height: 50px;
    background-repeat: repeat-x;
    background-position: bottom right;
    background-image: url(${LightTextureTop});
    top: -35px;
    left: 0;
  }
  
  ${props => props.bottomTexture ? "&::after{content: ''}" : ''};
  ${props => props.topTexture ? "&::before{content: ''}" : ''};
`

const PageSection = props => <PageSectionStyled {...props}>{props.children}</PageSectionStyled>

export default PageSection

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import media from 'src/components/responsive'
import { FakeButton } from 'src/components/common/Button'

const BlockLinkWrapper = styled.div`
  ${tw`relative w-full md:w-1/2 mb-1 md:mb-0`};
`
const InnerContent = styled.div`
  ${tw`absolute pin p-1`};
  ${tw`flex items-center flex-col justify-center`};
  ${tw`text-white text-center`};
  background-color: rgba(0, 102, 0, 0.8);
  &:before {
    ${tw`border absolute`};
    content: '';
    border-color: rgba(255, 255, 255, 0);
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    transition: border-color 0.2s ease;
  }
  :hover {
    background-color: rgba(0, 102, 0, 0.6);
    h3 {
      color: ${props => props.theme.secondaryColor};
    }
    &:before {
      border-color: ${props => props.theme.secondaryColor};
    }
  }
  h3 {
    color: white;
    transition: color 0.5s ease;
  }
  ${media.lg`border: 1px solid white;`}
`
const LinkTitle = styled.h3`
  ${tw`font-bold text-2xl mb-4 mt-4 text-white`};
  color: white;
`

const BlockLink = ({ item }) => (
  <BlockLinkWrapper>
    <Link to={item.link}>
      <Img className="w-full" fluid={item.image.fluid} />

      <InnerContent>
        <LinkTitle>{item.title}</LinkTitle>
        <FakeButton primary light to={item.link}>
          Details
        </FakeButton>
      </InnerContent>
    </Link>
  </BlockLinkWrapper>
)

export default BlockLink

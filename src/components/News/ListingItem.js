import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import media from 'src/components/responsive'

const NewsItemWrapper = styled(Link)`
  ${tw`mb-8 md:mb-8 flex items-stretch no-underline`};
  &:hover {
    color: inherit;
  }
`
const NewsItemExternalWrapper = styled.a`
  ${tw`mb-8 md:mb-8 flex items-stretch no-underline`};
  &:hover {
    color: inherit;
  }
`
const ImageContainer = styled.div`
  ${tw`m-0  w-1/2 md:h-auto md:w-2/5 relative `};
`

const CoverImage = styled(Img)`
  border: 1px solid ${props => props.theme.lightColor};
  ${tw`h-full`};
  img {
    ${tw`mb-0`};
  }

  &::after {
    ${tw`absolute`};
    content: '';
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    border: 1px solid white;
  }
`
const ImgBg = styled.div`
  background-color: ${props => props.theme.primaryColor};
  ${tw`absolute hidden md:block w-full h-full`};
  top: -10px;
  left: -10px;
`

const TextWrapper = styled.div`
  ${tw` w-1/2 md:w-3/5 pl-4 text-grey-darkest`};
`
const NewsTitle = styled.h3`
  ${tw`mb-2 leading-normal underline text-lg`};
  text-decoration: none;
  color: ${props => props.theme.primaryColor};
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.primaryColor};
    ${tw`mx-auto mt-2`};
    ${media.md`width: 50%; margin-left:0;`};
  }
`
const Date = styled.p`
  ${tw`text-sm mb-2`};
  color: ${props => props.theme.primaryColor};
  color: #716f6f;
`
const ReadMore = styled.div`
  ${tw`mb-0 mt-2`};
  color: #716f6f;
`
const NewsExcerpt = styled.div`
  ${tw` text-sm md:text-base`};
`

const ListingItem = ({ newsArticle: { title, slug, externalPostUrl = '', shortDate, excerpt, bannerImage } }) => (
  <>
    {externalPostUrl === '' ? (
      <NewsItemWrapper to={`/news/${slug}`}>
        <ImageContainer>
          <ImgBg />
          <CoverImage fluid={bannerImage.fluid} />
        </ImageContainer>
        <TextWrapper>
          <NewsTitle>{title}</NewsTitle>
          <Date>{shortDate}</Date>
          <NewsExcerpt
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
          <ReadMore>read more...</ReadMore>
        </TextWrapper>
      </NewsItemWrapper>
    ) : (
      <NewsItemExternalWrapper href={externalPostUrl} target="_blank">
        <ImageContainer>
          <ImgBg />
          <CoverImage fluid={bannerImage.fluid} />
        </ImageContainer>
        <TextWrapper>
          <NewsTitle>{title}</NewsTitle>
          <Date>{shortDate}</Date>
          <NewsExcerpt
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
          <ReadMore>read more...</ReadMore>
        </TextWrapper>
      </NewsItemExternalWrapper>
    )}
  </>
)

export default ListingItem

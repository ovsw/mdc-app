import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const NewsItemWrapper = styled(Link)`
  ${tw`mb-12 flex items-stretch no-underline`};
  &:hover {
    color: inherit;
  }
`
const CoverImage = styled(Img)`
  ${tw`m-0 w-1/3`};
  img {
    ${tw`mb-0`};
  }
`
const TextWrapper = styled.div`
  ${tw`w-2/3 pl-4`};
`
const NewsTitle = styled.h3`
  ${tw`mb-2 underline leading-normal underline text-lg`};
  color: ${props => props.theme.primaryColor};
`
const Date = styled.p`
  ${tw`text-sm mb-4`};
  color: ${props => props.theme.primaryColor};
`

const ListingItem = ({ newsArticle: { title, slug, shortDate, excerpt, bannerImage } }) => (
  <NewsItemWrapper to={`/news/${slug}`}>
    <CoverImage fluid={bannerImage.fluid} />
    <TextWrapper>
      <NewsTitle>{title}</NewsTitle>
      <Date>{shortDate}</Date>
      <div
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
      <p className="mb-0 mt-4 text-green-darker">read more...</p>
    </TextWrapper>
  </NewsItemWrapper>
)

export default ListingItem

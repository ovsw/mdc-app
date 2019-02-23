import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import media from 'src/components/responsive'
import { LinkButton } from 'src/components/common/Button'

const EventWrapper = styled.div`
  ${tw`flex flex-col`};
  ${media.md`${tw`flex-row`};`};
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  border-top: 1px solid white;
`
const EventImage = styled(Img)`
  ${tw`w-full h-48`};
  ${media.md`${tw`h-auto w-1/3`};`};
`
const ContentWrapper = styled.div`
  ${tw`p-4 w-2/3`};
`
const EventTitle = styled.h4`
  ${tw`mb-1 pb-1`};
`
const EventDate = styled.div`
  ${tw`inline-block text-sm mb-4 pt-1`};
  border-top: 1px solid green;
`
const ShortDescription = styled.div`
  ${tw` text-sm`};
`

const KidsEvent = ({ event: { title, date, shortDescription, signUpLink, coverImage } }) => (
  <EventWrapper>
    <EventImage fluid={coverImage.fluid} />
    <ContentWrapper>
      <EventTitle>{title}</EventTitle>
      <EventDate>{date}</EventDate>
      <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
      <LinkButton primary dark href={signUpLink}>
        Register Now for {date}
      </LinkButton>
    </ContentWrapper>
  </EventWrapper>
)

export default KidsEvent

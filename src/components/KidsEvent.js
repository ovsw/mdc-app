import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import media from 'src/components/responsive'

const EventWrapper = styled.div`
  ${tw`flex flex-col mt-4 pt-4 md:mt-6 md:pt-6`};
  ${media.md`${tw`flex-row`};`};
  border-top: 1px solid ${props => props.theme.primaryColor};
`
const EventImage = styled(Img)`
  ${tw`w-full h-48`};
  ${media.md`${tw`h-auto w-1/3`};`};
`
const ContentWrapper = styled.div`
  ${tw`py-4 md:py-0 px-4 w-full md:w-2/3`};
`
const EventTitle = styled.h4`
  ${tw`mb-1 pb-1`};
  color: ${props => props.theme.primaryColor};
`
const ShortDescription = styled.div`
  ${tw` text-sm`};
`
const DatesTable = styled.table`
  ${tw`mb-2`};
`

const KidsEvent = ({ event: { title, date1, date2, shortDescription, signUpLink1, signUpLink2, coverImage } }) => (
  <EventWrapper>
    <EventImage fluid={coverImage.fluid} />
    <ContentWrapper>
      <EventTitle>{title}</EventTitle>
      {/* <EventDate>{date1}</EventDate> */}
      <DatesTable>
        <tr>
          <td>
            {date1} -{' '}
            <a href={signUpLink1} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </td>
        </tr>
        {date2 && signUpLink2 && (
          <tr>
            <td>
              {date2} -{' '}
              <a href={signUpLink2} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </td>
          </tr>
        )}
      </DatesTable>
      <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
      {/* <LinkButton primary dark href={signUpLink1}>
        Register Now for {date1}
      </LinkButton> */}
      {/* {date2 && signUpLink2 && 
        <LinkButton primary dark href={signUpLink1}>
        Register Now for {date1}
        </LinkButton>
      } */}
    </ContentWrapper>
  </EventWrapper>
)

export default KidsEvent

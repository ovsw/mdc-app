import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import { OverlayLink, IntOverlayLink } from './OverlayLink'

const OverlayWrapper = styled.div`
  ${tw`fixed pin-x pin-y flex items-stretch bg-green-dark`};
  ${tw`flex-row flex-wrap`};
  z-index: 12;
  margin-top: 5rem;
  ${media.md`z-index: 5;`};
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  ${media.lg`flex-direction: row`};
`

const Overlay = ({
  datesRatesOverlayVisible,
  datesRatesSchoolOverlayVisible,
  enrollNowOverlayVisible,
  enrollCampOverlayVisible,
  enrollSchoolOverlayVisible,
  requestInfoOverlayVisible,
  toggleDatesRatesSchoolOverlay,
  toggleEnrollCampOverlay,
  toggleEnrollSchoolOverlay,
  closeAllOverlays,
}) => (
  <>
    {datesRatesOverlayVisible && (
      <OverlayWrapper vertical>
        <OverlayLink
          linkTitle="Summer Camp"
          linkSubtitle="See Dates & Rates"
          linkUrl="/summer-camp/dates-and-rates"
          label="scDatesRates"
          click={closeAllOverlays}
          ofTwo
        />
        <IntOverlayLink
          linkTitle="School Year"
          linkSubtitle="See Dates & Rates"
          click={toggleDatesRatesSchoolOverlay}
          label="syDatesRates"
          ofTwo
        />
      </OverlayWrapper>
    )}
    {datesRatesSchoolOverlayVisible && (
      <OverlayWrapper>
        <OverlayLink
          linkTitle="Children's Classes"
          linkSubtitle="See Dates & Rates"
          linkUrl="/school-year-programs/childrens-classes"
          label="syClasses"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Kid's Events"
          linkSubtitle="See Dates & Rates"
          linkUrl="/school-year-programs/kids-weekly-events-listing"
          label="syEvents"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Preschool"
          linkSubtitle="See Dates & Rates"
          linkUrl="/school-year-programs/preschool-program"
          label="syPre"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="After-School"
          linkSubtitle="See Dates & Rates"
          linkUrl="/school-year-programs/after-school-program"
          label="syAfter"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Vacation Program"
          linkSubtitle="See Dates & Rates"
          linkUrl="/school-year-programs/vacation-program"
          label="syVacation"
          click={closeAllOverlays}
        />
      </OverlayWrapper>
    )}
    {enrollNowOverlayVisible && (
      <OverlayWrapper vertical>
        <IntOverlayLink
          linkTitle="Summer Camp"
          linkSubtitle="Enroll Now"
          click={toggleEnrollCampOverlay}
          label="scEnroll"
          ofTwo
        />
        <IntOverlayLink
          linkTitle="School Year"
          linkSubtitle="Enroll Now"
          click={toggleEnrollSchoolOverlay}
          label="syEnroll"
          ofTwo
        />
      </OverlayWrapper>
    )}
    {enrollCampOverlayVisible && (
      <OverlayWrapper vertical>
        <OverlayLink
          linkTitle="New Campers"
          linkSubtitle="Enroll Now"
          linkUrl="https://maplewood.campintouch.com/v2/login/login.aspx?"
          label="scNew"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Returning Campers"
          linkSubtitle="Enroll Now"
          linkUrl="https://maplewood.campintouch.com/ui/forms/application/camper/App"
          label="scReturning"
          click={closeAllOverlays}
        />
      </OverlayWrapper>
    )}
    {enrollSchoolOverlayVisible && (
      <OverlayWrapper>
        <OverlayLink
          linkTitle="Classes"
          linkSubtitle="Apply Now"
          linkUrl="/school-year-programs/childrens-classes"
          label="syClasses"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Kid's Events"
          linkSubtitle="Register Now"
          linkUrl="/school-year-programs/kids-weekly-events-listing"
          label="syEvents"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Preschool"
          linkSubtitle="Apply Now"
          linkUrl="/school-year-programs/preschool-program-application"
          label="syPre"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="After-School"
          linkSubtitle="Apply Now"
          linkUrl="/school-year-programs/after-school-program-application"
          label="syAfter"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Vacation Program"
          linkSubtitle="Signup Now"
          linkUrl="/school-year-programs/vacation-program"
          label="syVacation"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Birthday Parties"
          linkSubtitle="Schedule Now"
          linkUrl="#"
          label="syBirthdays"
          click={closeAllOverlays}
        />
      </OverlayWrapper>
    )}
    {requestInfoOverlayVisible && (
      <OverlayWrapper>
        <OverlayLink
          linkTitle=""
          linkSubtitle="Schedule A Tour"
          linkUrl="#"
          label="infoTour"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle=""
          linkSubtitle="Attend An Event"
          linkUrl="#"
          label="infoEvent"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle=""
          linkSubtitle="Speak With a Director"
          linkUrl="#"
          label="infoSpeak"
          click={closeAllOverlays}
        />
        <OverlayLink linkTitle="" linkSubtitle="Contact Us" linkUrl="#" label="infoContact" click={closeAllOverlays} />
      </OverlayWrapper>
    )}
  </>
)

export default Overlay

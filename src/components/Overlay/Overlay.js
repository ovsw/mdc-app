import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faGraduationCap,
  faStar,
  faChild,
  faBellSchool,
  faClock,
  faBellSchoolSlash,
  faBirthdayCake,
  faPenNib,
  faPaperPlane,
  faComments,
  faCalendarStar,
  faCalendarCheck,
} from '@fortawesome/pro-light-svg-icons'

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
class Overlay extends React.Component {
  constructor(props) {
    super(props)

    const { closeAllOverlays } = this.props

    this.triggerChat = () => {
      window.Tawk_API.toggle()
      closeAllOverlays()
    }
  }

  render() {
    const {
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
    } = this.props

    return (
      <>
        {datesRatesOverlayVisible && (
          <OverlayWrapper vertical>
            <OverlayLink
              linkTitle="Summer Camp"
              linkSubtitle="Dates & Rates"
              linkUrl="/summer-camp/dates-and-rates"
              icon={<FontAwesomeIcon icon={faSun} />}
              label="scDatesRates"
              click={closeAllOverlays}
              ofTwo
            />
            <IntOverlayLink
              linkTitle="School Year"
              linkSubtitle="Dates & Rates"
              icon={<FontAwesomeIcon icon={faBellSchool} />}
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
              linkSubtitle="Dates & Rates"
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              linkUrl="/school-year-programs/childrens-classes"
              label="syClasses"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Kid's Events"
              linkSubtitle="Dates & Rates"
              icon={<FontAwesomeIcon icon={faStar} />}
              linkUrl="/school-year-programs/kids-weekly-events-listing"
              label="syEvents"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Preschool"
              linkSubtitle="Dates & Rates"
              icon={<FontAwesomeIcon icon={faChild} />}
              linkUrl="/school-year-programs/preschool-program"
              label="syPre"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="After-School"
              linkSubtitle="Dates & Rates"
              icon={<FontAwesomeIcon icon={faClock} />}
              linkUrl="/school-year-programs/after-school-program"
              label="syAfter"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Vacation Program"
              linkSubtitle="Dates & Rates"
              icon={<FontAwesomeIcon icon={faBellSchoolSlash} />}
              linkUrl="/school-year-programs/vacation-program"
              label="syVacation"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Birthday Parties"
              linkSubtitle="Dates & Rates"
              icon={<FontAwesomeIcon icon={faBirthdayCake} />}
              linkUrl="/school-year-programs/birthday-parties"
              label="syBirthdays"
              click={closeAllOverlays}
            />
          </OverlayWrapper>
        )}
        {enrollNowOverlayVisible && (
          <OverlayWrapper vertical>
            <IntOverlayLink
              linkTitle="Summer Camp"
              linkSubtitle="Enroll Now"
              icon={<FontAwesomeIcon icon={faSun} />}
              click={toggleEnrollCampOverlay}
              label="scEnroll"
              ofTwo
            />
            <IntOverlayLink
              linkTitle="School Year"
              linkSubtitle="Enroll Now"
              icon={<FontAwesomeIcon icon={faBellSchool} />}
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
              icon={<FontAwesomeIcon icon={faPenNib} />}
              linkUrl="https://maplewood.campintouch.com/v2/login/login.aspx?"
              label="scNew"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Returning Campers"
              linkSubtitle="Enroll Now"
              icon={<FontAwesomeIcon icon={faPenNib} />}
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
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              linkUrl="/school-year-programs/childrens-classes"
              label="syClasses"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Kid's Events"
              linkSubtitle="Register Now"
              icon={<FontAwesomeIcon icon={faStar} />}
              linkUrl="/school-year-programs/kids-weekly-events-listing"
              label="syEvents"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Preschool"
              linkSubtitle="Apply Now"
              icon={<FontAwesomeIcon icon={faChild} />}
              linkUrl="/school-year-programs/preschool-program-application"
              label="syPre"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="After-School"
              linkSubtitle="Apply Now"
              icon={<FontAwesomeIcon icon={faClock} />}
              linkUrl="/school-year-programs/after-school-program-application"
              label="syAfter"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Vacation Program"
              linkSubtitle="Signup Now"
              icon={<FontAwesomeIcon icon={faBellSchoolSlash} />}
              linkUrl="/school-year-programs/vacation-program"
              label="syVacation"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Birthday Parties"
              linkSubtitle="Schedule Now"
              icon={<FontAwesomeIcon icon={faBirthdayCake} />}
              linkUrl="/school-year-programs/birthday-parties-dates-and-rates"
              label="syBirthdays"
              click={closeAllOverlays}
            />
          </OverlayWrapper>
        )}
        {requestInfoOverlayVisible && (
          <OverlayWrapper>
            <OverlayLink
              linkTitle="Take a Tour"
              linkSubtitle="Schedule Now"
              icon={<FontAwesomeIcon icon={faCalendarStar} />}
              linkUrl="/schedule-a-tour"
              label="infoTour"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Attend  Info Session"
              icon={<FontAwesomeIcon icon={faCalendarCheck} />}
              linkSubtitle="View Schedule"
              linkUrl="#"
              label="infoEvent"
              click={closeAllOverlays}
            />
            <OverlayLink
              linkTitle="Chat with us"
              linkSubtitle="Chat Now"
              icon={<FontAwesomeIcon icon={faComments} />}
              linkUrl="#"
              label="infoSpeak"
              click={this.triggerChat}
            />
            <OverlayLink
              linkTitle="Email & Phone"
              linkSubtitle="Contact Us"
              icon={<FontAwesomeIcon icon={faPaperPlane} />}
              linkUrl="/contact-us"
              label="infoContact"
              click={closeAllOverlays}
            />
          </OverlayWrapper>
        )}
      </>
    )
  }
}

export default Overlay

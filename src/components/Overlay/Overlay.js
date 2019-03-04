import React from 'react'
import OverlayLink from 'src/components/Overlay/OverlayLink/OverlayLink'
import IntOverlayLink from 'src/components/Overlay/IntOverlayLink/IntOverlayLink'

import styles from './Overlay.module.css'

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
  <div className={styles.overlayWrapper}>
    {datesRatesOverlayVisible && (
      <>
        <OverlayLink
          linkTitle="Summer Camp"
          linkSubtitle="Dates & Rates"
          linkUrl="/summer-camp/dates-and-rates"
          label="scDatesRates"
          click={closeAllOverlays}
        />
        <IntOverlayLink
          linkTitle="School Year"
          linkSubtitle="Dates & Rates"
          click={toggleDatesRatesSchoolOverlay}
          label="syDatesRates"
        />
      </>
    )}
    {datesRatesSchoolOverlayVisible && (
      <>
        <OverlayLink
          linkTitle="Children's Classes"
          linkSubtitle="Dates & Rates"
          linkUrl="/school-year-programs/childrens-classes"
          label="scNew"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Weekly Events"
          linkSubtitle="Dates & Rates"
          linkUrl="/school-year-programs/kids-weekly-events-listing"
          label="scNew"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Preschool"
          linkSubtitle="Dates & Rates"
          linkUrl="/school-year-programs/preschool-program"
          label="scNew"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="After-School"
          linkSubtitle="Dates & Rates"
          linkUrl="/school-year-programs/after-school-program"
          label="scNew"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Vacation Program"
          linkSubtitle="Dates & Rates"
          linkUrl="/school-year-programs/vacation-program"
          label="scNew"
          click={closeAllOverlays}
        />
      </>
    )}
    {enrollNowOverlayVisible && (
      <>
        <IntOverlayLink
          linkTitle="Summer Camp"
          linkSubtitle="Enroll Now"
          click={toggleEnrollCampOverlay}
          label="scEnroll"
        />
        <IntOverlayLink
          linkTitle="School Year"
          linkSubtitle="Enroll Now"
          click={toggleEnrollSchoolOverlay}
          label="syEnroll"
        />
      </>
    )}
    {enrollCampOverlayVisible && (
      <>
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
      </>
    )}
    {enrollSchoolOverlayVisible && (
      <>
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
          linkTitle="Birthday Parties"
          linkSubtitle="Schedule Now"
          linkUrl="#"
          label="syBirthdays"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Vacation"
          linkSubtitle="Signup Now"
          linkUrl="/school-year-programs/vacation-program"
          label="syVacation"
          click={closeAllOverlays}
        />
      </>
    )}
    {requestInfoOverlayVisible && (
      <>
        <OverlayLink linkTitle="Schedule" linkSubtitle="A Tour" linkUrl="#" label="infoTour" click={closeAllOverlays} />
        <OverlayLink
          linkTitle="Attend"
          linkSubtitle="An Event"
          linkUrl="#"
          label="infoEvent"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Speak"
          linkSubtitle="With a Director"
          linkUrl="#"
          label="infoSpeak"
          click={closeAllOverlays}
        />
        <OverlayLink
          linkTitle="Contact Us"
          linkSubtitle="Phone or Email"
          linkUrl="#"
          label="infoContact"
          click={closeAllOverlays}
        />
      </>
    )}
  </div>
)

export default Overlay

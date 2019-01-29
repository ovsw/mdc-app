import React from 'react'
import OverlayLink from 'src/components/Overlay/OverlayLink/OverlayLink'
import IntOverlayLink from 'src/components/Overlay/IntOverlayLink/IntOverlayLink'

const Overlay = ({
  datesRatesOverlayVisible,
  enrollNowOverlayVisible,
  enrollCampOverlayVisible,
  enrollSchoolOverlayVisible,
  requestInfoOverlayVisible,
  toggleEnrollCampOverlay,
  toggleEnrollSchoolOverlay,
}) => (
  <div
    className="fixed pin-x pin-y flex flex-col md:flex-row items-stretch bg-green-dark"
    style={{ zIndex: '5', paddingTop: '120px' }}
  >
    {datesRatesOverlayVisible && (
      <>
        <OverlayLink linkTitle="Summer Camp" linkSubtitle="Dates & Rates" linkUrl="#" label="scDatesRates" />
        <OverlayLink linkTitle="School Year" linkSubtitle="Dates & Rates" linkUrl="#" label="syDatesRates" />
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
        <OverlayLink linkTitle="New Campers" linkSubtitle="Enroll Now" linkUrl="#" label="scNew" />
        <OverlayLink linkTitle="Returning Campers" linkSubtitle="Enroll Now" linkUrl="#" label="scReturning" />
      </>
    )}
    {enrollSchoolOverlayVisible && (
      <>
        <OverlayLink linkTitle="Pre & After School" linkSubtitle="Apply Now" linkUrl="#" label="syPreAfter" />
        <OverlayLink linkTitle="Classes" linkSubtitle="Apply Now" linkUrl="#" label="syClasses" />
        <OverlayLink linkTitle="Kid's Events" linkSubtitle="Enroll Now" linkUrl="#" label="syEvents" />
        <OverlayLink linkTitle="Birthday Parties" linkSubtitle="Schedule Now" linkUrl="#" label="syBirthdays" />
        <OverlayLink linkTitle="Vacation" linkSubtitle="Signup Now" linkUrl="#" label="syVacation" />
      </>
    )}
    {requestInfoOverlayVisible && (
      <>
        <OverlayLink linkTitle="Schedule" linkSubtitle="A Tour" linkUrl="#" label="infoTour" />
        <OverlayLink linkTitle="Attend" linkSubtitle="An Event" linkUrl="#" label="infoEvent" />
        <OverlayLink linkTitle="Speak" linkSubtitle="With a Director" linkUrl="#" label="infoSpeak" />
        <OverlayLink linkTitle="Contact Us" linkSubtitle="Phone or Email" linkUrl="#" label="infoContact" />
      </>
    )}
  </div>
)

export default Overlay

import React from 'react'

import { NavContext } from 'src/layouts'

import styles from './CtaLinks.module.css'

const CtaLinks = () => (
  <ul className="list-reset m-0 flex w-full">
    <NavContext.Consumer>
      {({
        datesRatesOverlayVisible,
        enrollNowOverlayVisible,
        enrollCampOverlayVisible,
        enrollSchoolOverlayVisible,
        requestInfoOverlayVisible,
        toggleDatesRatesOverlay,
        toggleEnrollNowOverlay,
        toggleRequestInfoOverlay,
        closeAllOverlays,
      }) => (
        <>
          <li className={`${styles.quickLink}${datesRatesOverlayVisible ? ` ${styles.quickLinkActive}` : ``}`}>
            {!datesRatesOverlayVisible ? (
              <button type="button" onClick={toggleDatesRatesOverlay}>
                <span>
                  Dates &amp; <br /> Rates
                </span>
              </button>
            ) : (
              <button type="button" onClick={closeAllOverlays}>
                <span>Close</span>
              </button>
            )}
          </li>
          <li
            className={`${styles.quickLink}${
              enrollNowOverlayVisible || enrollCampOverlayVisible || enrollSchoolOverlayVisible
                ? ` ${styles.quickLinkActive}`
                : ``
            }`}
          >
            {enrollNowOverlayVisible || enrollCampOverlayVisible || enrollSchoolOverlayVisible ? (
              <button type="button" onClick={closeAllOverlays}>
                <span>Close</span>
              </button>
            ) : (
              <button type="button" onClick={toggleEnrollNowOverlay}>
                <span>
                  Enroll <br /> Now
                </span>
              </button>
            )}
          </li>
          <li className={styles.quickLink}>
            {!requestInfoOverlayVisible ? (
              <button type="button" onClick={toggleRequestInfoOverlay}>
                <span>
                  Request <br />
                  Info
                </span>
              </button>
            ) : (
              <button type="button" onClick={closeAllOverlays}>
                <span>Close</span>
              </button>
            )}
          </li>
        </>
      )}
    </NavContext.Consumer>
  </ul>
)

export default CtaLinks

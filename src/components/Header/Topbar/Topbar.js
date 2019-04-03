import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from 'src/utils/typography'
import { NavContext } from 'src/layouts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSignInAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import styles from './Topbar.module.css'

const Topbar = props => (
  <NavContext.Consumer>
    {({
      datesRatesOverlayVisible,
      enrollNowOverlayVisible,
      enrollCampOverlayVisible,
      enrollSchoolOverlayVisible,
      toggleDatesRatesOverlay,
      toggleEnrollNowOverlay,
      closeAllOverlays,
    }) => (
      <>
        <div className="gradient-green px-2">
          {/* DESKTOP  */}
          <div className="hidden lg:flex container mx-auto px-1 justify-between">
            <div>
              <a href="tel:1-508-238-2387" className={`${styles.link} ml-4`}>
                Call Us (508)-238-2387 <FontAwesomeIcon icon={faPhone} fixedWidth size="1x" />
              </a>
            </div>
            <div>
              <Link
                to="/news"
                className={`${styles.link} text-yellow-brand-light hover:text-white`}
                style={{ marginRight: '1rem' }}
              >
                <FontAwesomeIcon icon={faNewspaper} fixedWidth size="1x" /> News
              </Link>
              <a
                href="https://maplewood.campintouch.com/v2/login/login.aspx?"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSignInAlt} fixedWidth size="1x" /> Summer Login
              </a>
            </div>
          </div>

          <div className="lg:hidden container mx-auto px-1 flex justify-between">
            {!datesRatesOverlayVisible ? (
              <button type="button" onClick={toggleDatesRatesOverlay} className={styles.link}>
                <span>Dates &amp; Rates</span>
              </button>
            ) : (
              <button type="button" onClick={closeAllOverlays} className={styles.linkActive}>
                <span>Close</span>
              </button>
            )}
            {enrollNowOverlayVisible || enrollCampOverlayVisible || enrollSchoolOverlayVisible ? (
              <button type="button" onClick={closeAllOverlays} className={styles.linkActive}>
                <span>Close</span>
              </button>
            ) : (
              <button type="button" onClick={toggleEnrollNowOverlay} className={styles.link}>
                <span>Enroll Now</span>
              </button>
            )}
          </div>
          {/* END DESKTOP */}
        </div>
      </>
    )}
  </NavContext.Consumer>
)

export default Topbar

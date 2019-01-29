import React from 'react'
import { Link } from 'gatsby'
import Megamenu from 'src/components/Header/Navbar/Desktopnav/Megamenu/Megamenu'

import { MobileNavToggleContext } from 'src/layouts'

import styles from './Desktopnav.module.css'

class DesktopNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileNavVisible: false,
    }
  }

  render() {
    const { aboutNav, familiesNav, staffNav } = this.props
    return (
      <ul className="list-reset m-0 py-2 px-2 flex items-center">
        <Megamenu menuTitle="About Us" menuModel={aboutNav} />
        <Megamenu menuTitle="Maplewood Families" menuModel={familiesNav} />
        <li className="m-0 text-center flex-auto" />
        <Megamenu menuTitle="Staff" menuModel={staffNav} />

        <li className="m-0 text-center w-2/6">
          <ul
            className="list-reset m-0 flex"
            // style={{ background: 'linear-gradient(to left, rgb(11, 163, 96) 0%, rgb(54, 124, 43) 100%)' }}
          >
            <MobileNavToggleContext.Consumer>
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
            </MobileNavToggleContext.Consumer>
          </ul>
        </li>
      </ul>
    )
  }
}

export default DesktopNav

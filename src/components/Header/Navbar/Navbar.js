import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { NavContext } from 'src/layouts'

import MobileNav from 'src/components/Header/Navbar/MobileNav/MobileNav'
import DesktopNav from 'src/components/Header/Navbar/Desktopnav/Desktopnav'
import SideDrawer from 'src/components/SideDrawer/SideDrawer'
import BarButton from 'src/components/SideDrawer/BarButton/BarButton'

import styles from './Navbar.module.css'

const navbar = props => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            aboutNav {
              title
              url
              children {
                title
                url
              }
            }
            familiesNav {
              title
              url
            }
            staffNav {
              title
              url
            }
          }
        }
      }
    `}
    render={data => (
      <NavContext.Consumer>
        {({
          mobileNavVisible,
          toggleMobileNav,
          requestInfoOverlayVisible,
          toggleRequestInfoOverlay,
          closeAllOverlays,
        }) => (
          <>
            <div className="relative">
              <nav className={styles.navBg}>
                <div className="container hidden mx-auto lg:block">
                  <DesktopNav
                    aboutNav={data.site.siteMetadata.aboutNav}
                    familiesNav={data.site.siteMetadata.familiesNav}
                    staffNav={data.site.siteMetadata.staffNav}
                    closeAllOverlays={closeAllOverlays}
                  />
                </div>

                {/* MOBILE */}
                <div className="flex container mx-auto  lg:hidden h-12 items-center pr-6 md:px-10">
                  {!requestInfoOverlayVisible ? (
                    <button
                      type="button"
                      onClick={toggleRequestInfoOverlay}
                      className="ml-1 p-2 md:pl-0 text-green-brand"
                    >
                      <span>
                        Request <br className="only-vsmall" /> Info
                      </span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={closeAllOverlays}
                      className="ml-4 py-2 px-4 text-green-brand bg-yellow-brand-light"
                    >
                      <span>Close</span>
                    </button>
                  )}

                  <div className="flex-1" />

                  {/* SideDrawer */}
                  <div>
                    <BarButton
                      isActive={mobileNavVisible}
                      onClick={toggleMobileNav}
                      strokeWidth="4"
                      radius="3"
                      color="green"
                      padding="15"
                    />
                  </div>
                  {/* END SideDrawer */}
                </div>
                {/* END MOBILE */}
              </nav>
            </div>

            <CSSTransition
              in={mobileNavVisible}
              timeout={300}
              classNames={{
                enter: 'animated',
                enterActive: 'fadeInRight',

                exit: 'animated',
                exitActive: 'fadeOutRight',
              }}
              unmountOnExit
            >
              <SideDrawer>
                <MobileNav
                  aboutNav={data.site.siteMetadata.aboutNav}
                  familiesNav={data.site.siteMetadata.familiesNav}
                  staffNav={data.site.siteMetadata.staffNav}
                  toggleMobileNav={toggleMobileNav}
                />
              </SideDrawer>
            </CSSTransition>
          </>
        )}
      </NavContext.Consumer>
    )}
  />
  // end static
)

export default navbar

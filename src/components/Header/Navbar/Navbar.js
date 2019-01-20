import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { MobileNavToggleContext } from 'src/layouts'

import SideDrawer from 'src/components/SideDrawer/SideDrawer'
import BarButton from 'src/components/SideDrawer/BarButton/BarButton'
import Logoimage from 'src/components/Header/Logoimage/Logoimage'
import DesktopNav from 'src/components/Header/Navbar/Desktopnav/Desktopnav'

import whitewoodbg from 'src/images/whitewood-texture.jpg'
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
      <div className="relative">
        <Logoimage />
        <nav className={styles.navBg}>
          <div className="hidden lg:block container mx-auto">
            <DesktopNav
              aboutNav={data.site.siteMetadata.aboutNav}
              familiesNav={data.site.siteMetadata.familiesNav}
              staffNav={data.site.siteMetadata.staffNav}
            />
          </div>

          {/* MOBILE */}
          <div className="flex lg:hidden h-12 items-center pr-6">
            <div>
              <a href="tel:1-508-238-2387" className="border-grey-dark border-r border-solid p-3 pr-4" title="call us">
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <a href="mailto:info@maplewoodyearround.com" className="p-3 px-4" title="e-mail us">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>

            <div className="flex-1" />

            {/* SideDrawer */}
            <div>
              <MobileNavToggleContext.Consumer>
                {({ mobileNavVisible, toggleMobileNav }) => (
                  <>
                    <BarButton
                      isActive={mobileNavVisible}
                      onClick={toggleMobileNav}
                      strokeWidth="4"
                      radius="3"
                      color="green"
                      padding="15"
                    />
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
                      <SideDrawer />
                    </CSSTransition>
                  </>
                )}
              </MobileNavToggleContext.Consumer>
              {/* END SideDrawer */}
            </div>
          </div>
          {/* END MOBILE */}
        </nav>
      </div>
    )}
  />
)

export default navbar

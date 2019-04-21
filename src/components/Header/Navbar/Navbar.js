import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import { NavContext } from 'src/layouts'

import MobileNav from 'src/components/Header/Navbar/MobileNav/MobileNav'
import DesktopNav from 'src/components/Header/Navbar/Desktopnav/Desktopnav'
import SideDrawer from 'src/components/SideDrawer/SideDrawer'
import BarButton from 'src/components/SideDrawer/BarButton/BarButton'

import WhitewoodTexture from 'src/images/whitewood-texture-4.png'

const NavWrapper = styled.nav`
  background-image: url('${WhitewoodTexture}');
`

const DesktopNavWrapper = styled.div`
  ${tw`hidden mx-auto lg:block`};
`
const MobileNavWrapper = styled.div`
  ${tw`flex mx-auto lg:hidden h-12 items-center pr-6 md:px-10`};
`
const MobileNavButton = styled.button`
  ${tw`ml-1 p-2  text-white`};
  background-color: ${props => (props.active ? props.theme.secondaryColor : props.theme.primaryColor)};
  color: ${props => (props.active ? props.theme.primaryColor : 'white')};
`

const navbar = () => (
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
              <NavWrapper>
                {/* DESKTOP */}
                <DesktopNavWrapper className="container">
                  <DesktopNav
                    aboutNav={data.site.siteMetadata.aboutNav}
                    familiesNav={data.site.siteMetadata.familiesNav}
                    staffNav={data.site.siteMetadata.staffNav}
                    closeAllOverlays={closeAllOverlays}
                  />
                </DesktopNavWrapper>
                {/* END DESKTOP */}

                {/* MOBILE */}
                <MobileNavWrapper className="container">
                  {!requestInfoOverlayVisible ? (
                    <MobileNavButton type="button" onClick={toggleRequestInfoOverlay}>
                      <span>
                        Request <br className="only-vsmall" /> Info
                      </span>
                    </MobileNavButton>
                  ) : (
                    <MobileNavButton active type="button" onClick={closeAllOverlays} className="ml-4 py-2 px-6">
                      <span>Close</span>
                    </MobileNavButton>
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
                </MobileNavWrapper>
                {/* END MOBILE */}
              </NavWrapper>
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

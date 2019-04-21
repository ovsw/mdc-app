import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import styled, { ThemeProvider } from 'styled-components'
import MdcTheme from 'src/themes/MdcTheme.js'
import media from 'src/components/responsive'

import Transition from 'src/components/transition'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import Overlay from 'src/components/Overlay/Overlay'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'src/css/style.css'

const ContentWrapper = styled.div`
  margin-top: 4.8rem;
  ${media.lg`margin-top: 6.3rem;`}
`

export const NavContext = React.createContext({
  mobileNavVisible: false,
  datesRatesOverlayVisible: false,
  datesRatesSchoolOverlayVisible: false,
  enrollNowOverlayVisible: false,
  enrollCampOverlayVisible: false,
  enrollSchoolOverlayVisible: false,
  requestInfoOverlayVisible: false,
  toggleMobileNav: () => {},
  toggleDatesRatesOverlay: () => {},
  toggleDatesRatesSchoolOverlay: () => {},
  toggleEnrollNowOverlay: () => {},
  toggleEnrollCampOverlay: () => {},
  toggleEnrollSchoolOverlay: () => {},
  toggleRequestInfoOverlay: () => {},
  closeAllOverlays: () => {},
})

class Layout extends React.Component {
  constructor(props) {
    super(props)

    const {
      datesRatesOverlayVisible,
      datesRatesSchoolOverlayVisible,
      enrollNowOverlayVisible,
      enrollCampOverlayVisible,
      enrollSchoolOverlayVisible,
      requestInfoOverlayVisible,
    } = this.state

    this.toggleMobileNav = () => {
      if (
        datesRatesOverlayVisible ||
        datesRatesSchoolOverlayVisible ||
        enrollNowOverlayVisible ||
        enrollCampOverlayVisible ||
        enrollSchoolOverlayVisible ||
        requestInfoOverlayVisible
      ) {
        this.closeAllOverlays()
      }
      this.setState(state => ({ mobileNavVisible: !state.mobileNavVisible }))
    }

    this.closeAllOverlays = () => {
      this.setState({
        mobileNavVisible: false,
        datesRatesOverlayVisible: false,
        datesRatesSchoolOverlayVisible: false,
        enrollNowOverlayVisible: false,
        enrollCampOverlayVisible: false,
        enrollSchoolOverlayVisible: false,
        requestInfoOverlayVisible: false,
      })
    }

    this.toggleDatesRatesOverlay = () => {
      this.closeAllOverlays()
      this.setState(state => ({
        datesRatesOverlayVisible: !state.datesRatesOverlayVisible,
      }))
    }

    this.toggleDatesRatesSchoolOverlay = () => {
      this.closeAllOverlays()
      this.setState(state => ({
        datesRatesSchoolOverlayVisible: !state.datesRatesSchoolOverlayVisible,
      }))
    }

    this.toggleEnrollNowOverlay = () => {
      this.closeAllOverlays()
      this.setState(state => ({
        enrollNowOverlayVisible: !state.enrollNowOverlayVisible,
      }))
    }

    this.toggleEnrollCampOverlay = () => {
      this.closeAllOverlays()
      this.setState(state => ({
        enrollCampOverlayVisible: !state.enrollCampOverlayVisible,
      }))
    }

    this.toggleEnrollSchoolOverlay = () => {
      this.closeAllOverlays()
      this.setState(state => ({
        enrollSchoolOverlayVisible: !state.enrollSchoolOverlayVisible,
      }))
    }

    this.toggleRequestInfoOverlay = () => {
      this.closeAllOverlays()
      this.setState(state => ({
        requestInfoOverlayVisible: !state.requestInfoOverlayVisible,
      }))
    }

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      mobileNavVisible: false,
      datesRatesOverlayVisible: false,
      datesRatesSchoolOverlayVisible: false,
      enrollNowOverlayVisible: false,
      enrollCampOverlayVisible: false,
      enrollSchoolOverlayVisible: false,
      requestInfoOverlayVisible: false,
      toggleMobileNav: this.toggleMobileNav,
      toggleDatesRatesOverlay: this.toggleDatesRatesOverlay,
      toggleDatesRatesSchoolOverlay: this.toggleDatesRatesSchoolOverlay,
      toggleEnrollNowOverlay: this.toggleEnrollNowOverlay,
      toggleEnrollCampOverlay: this.toggleEnrollCampOverlay,
      toggleEnrollSchoolOverlay: this.toggleEnrollSchoolOverlay,
      toggleRequestInfoOverlay: this.toggleRequestInfoOverlay, // we pass a refference to the method used for toggling the mobile nav in the state, because we're going to pass the state via Context further down, and so we can access the method on the Context Consumer
      closeAllOverlays: this.closeAllOverlays,
    }
  }

  render() {
    const { children, location } = this.props
    const {
      datesRatesOverlayVisible,
      datesRatesSchoolOverlayVisible,
      enrollNowOverlayVisible,
      enrollCampOverlayVisible,
      enrollSchoolOverlayVisible,
      requestInfoOverlayVisible,
      toggleEnrollCampOverlay,
      toggleDatesRatesSchoolOverlay,
      toggleEnrollSchoolOverlay,
      closeAllOverlays,
    } = this.state

    let showOverlay = false

    if (
      datesRatesOverlayVisible ||
      datesRatesSchoolOverlayVisible ||
      enrollNowOverlayVisible ||
      enrollCampOverlayVisible ||
      enrollSchoolOverlayVisible ||
      requestInfoOverlayVisible
    )
      showOverlay = true

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            datoCmsSite {
              globalSeo {
                siteName
                fallbackSeo {
                  title
                  description
                  twitterCard
                }
              }
              faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={MdcTheme}>
            <>
              <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags}>
                <title>{data.datoCmsSite.globalSeo.fallbackSeo.title}</title>
                <meta name="description" content={data.datoCmsSite.globalSeo.fallbackSeo.description} />
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                />
              </HelmetDatoCms>

              <NavContext.Provider value={this.state}>
                {/* HEADER & NAV */}
                <Header />
                {showOverlay && (
                  <Overlay
                    datesRatesOverlayVisible={datesRatesOverlayVisible}
                    datesRatesSchoolOverlayVisible={datesRatesSchoolOverlayVisible}
                    enrollNowOverlayVisible={enrollNowOverlayVisible}
                    enrollCampOverlayVisible={enrollCampOverlayVisible}
                    enrollSchoolOverlayVisible={enrollSchoolOverlayVisible}
                    requestInfoOverlayVisible={requestInfoOverlayVisible}
                    toggleDatesRatesSchoolOverlay={toggleDatesRatesSchoolOverlay}
                    toggleEnrollCampOverlay={toggleEnrollCampOverlay}
                    toggleEnrollSchoolOverlay={toggleEnrollSchoolOverlay}
                    closeAllOverlays={closeAllOverlays}
                  />
                )}
                {/* END HEADER & NAV */}

                {/* CONTENT */}
                <ContentWrapper>
                  <Transition location={location}>{children}</Transition>
                </ContentWrapper>
                {/* END CONTENT */}

                {/* FOOTER */}
                <Footer />
                {/* END FOOTER */}
              </NavContext.Provider>
              {/* <button onClick={toggleDatesRatesOverlay} type="button">
              Toggle Overlay
            </button> */}
            </>
          </ThemeProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import Transition from 'src/components/transition'
import Header from 'src/components/Header/Header'
import Overlay from 'src/components/Overlay/Overlay'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'src/css/style.css'

export const MobileNavToggleContext = React.createContext({
  mobileNavVisible: false,
  datesRatesOverlayVisible: false,
  enrollNowOverlayVisible: false,
  enrollCampOverlayVisible: false,
  enrollSchoolOverlayVisible: false,
  requestInfoOverlayVisible: false,
  toggleMobileNav: () => {},
  toggleDatesRatesOverlay: () => {},
  toggleEnrollNowOverlay: () => {},
  toggleEnrollCampOverlay: () => {},
  toggleEnrollSchoolOverlay: () => {},
  toggleRequestInfoOverlay: () => {},
  closeAllOverlays: () => {},
})

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.toggleMobileNav = () => {
      this.setState(state => ({ mobileNavVisible: !state.mobileNavVisible }))
    }

    this.closeAllOverlays = () => {
      this.setState({
        datesRatesOverlayVisible: false,
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
      enrollNowOverlayVisible: false,
      enrollCampOverlayVisible: false,
      enrollSchoolOverlayVisible: false,
      requestInfoOverlayVisible: false,
      toggleMobileNav: this.toggleMobileNav,
      toggleDatesRatesOverlay: this.toggleDatesRatesOverlay,
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
      enrollNowOverlayVisible,
      enrollCampOverlayVisible,
      enrollSchoolOverlayVisible,
      requestInfoOverlayVisible,
      toggleEnrollCampOverlay,
      toggleEnrollSchoolOverlay,
    } = this.state

    let showOverlay = false

    if (
      datesRatesOverlayVisible ||
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
              }
              faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
              }
            }
          }
        `}
        render={data => (
          <>
            <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags}>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </HelmetDatoCms>

            <MobileNavToggleContext.Provider value={this.state}>
              {/* HEADER & NAV */}
              <Header />
              {showOverlay && (
                <Overlay
                  datesRatesOverlayVisible={datesRatesOverlayVisible}
                  enrollNowOverlayVisible={enrollNowOverlayVisible}
                  enrollCampOverlayVisible={enrollCampOverlayVisible}
                  enrollSchoolOverlayVisible={enrollSchoolOverlayVisible}
                  requestInfoOverlayVisible={requestInfoOverlayVisible}
                  toggleEnrollCampOverlay={toggleEnrollCampOverlay}
                  toggleEnrollSchoolOverlay={toggleEnrollSchoolOverlay}
                />
              )}
              {/* END HEADER & NAV */}

              {/* CONTENT */}
              <Transition location={location}>{children}</Transition>
              {/* END CONTENT */}
            </MobileNavToggleContext.Provider>
            {/* <button onClick={toggleDatesRatesOverlay} type="button">
              Toggle Overlay
            </button> */}
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout

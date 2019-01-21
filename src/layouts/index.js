import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import Transition from 'src/components/transition'
import Header from 'src/components/Header/Header'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'src/css/style.css'

export const MobileNavToggleContext = React.createContext({
  mobileNavVisible: false,
  toggleMobileNav: () => {},
})

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.toggleMobileNav = () => {
      this.setState(state => ({ mobileNavVisible: !state.mobileNavVisible }))
    }

    // this.toggleMobileNav = () => {
    //   this.setState(prevState => ({ mobileNavVisible: !prevState.mobileNavVisible }))
    // }

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      mobileNavVisible: false,
      toggleMobileNav: this.toggleMobileNav, // we pass a refference to the method used for toggling the mobile nav in the state, because we're going to pass the state via Context further down, and so we can access the method on the Context Consumer
    }
  }

  render() {
    const { children } = this.props
    const { mobileNavVisible, toggleMobileNav } = this.state

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
            datoCmsHome {
              seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
              }
              introTextNode {
                childMarkdownRemark {
                  html
                }
              }
              copyright
            }
          }
        `}
        render={data => (
          <>
            <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={data.datoCmsHome.seoMetaTags}>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </HelmetDatoCms>

            {/* HEADER & NAV */}
            <MobileNavToggleContext.Provider value={this.state}>
              <Header />
            </MobileNavToggleContext.Provider>
            {/* END HEADER & NAV */}

            {/* CONTENT */}
            <Transition location={this.props.location}>{children}</Transition>
            {/* END CONTENT */}
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

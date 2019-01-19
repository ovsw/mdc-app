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
          <div className="container pt-32 mt-4 mx-auto">
            <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={data.datoCmsHome.seoMetaTags}>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </HelmetDatoCms>

            {/* HEADER & NAV */}
            <MobileNavToggleContext.Provider value={this.state}>
              <Header />
            </MobileNavToggleContext.Provider>
            {/* END HEADER & NAV */}

            {/* CONTENT */}
            <div className="container__sidebar">
              <div className="sidebar">
                <h6 className="sidebar__title">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                </h6>
                <div
                  className="sidebar__intro"
                  dangerouslySetInnerHTML={{
                    __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
                  }}
                />
                <div className="bg-blue">
                  <h2>Tailwind Test</h2>
                  <button
                    type="button"
                    className="bg-white border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-1 rounded-full text-purple text-xs"
                  >
                    Test Button
                  </button>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/the-maplewood-experience">Maplewood Experience</Link>
                  </li>
                  <li>
                    <Link to="/summer-camp/new-for-2019">New for 2019!</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container__body">
              <div className="container__mobile-header">
                <div className="mobile-header">
                  <div className="mobile-header__menu">
                    <Link to="#" data-js="toggleSidebar" />
                  </div>
                  <div className="mobile-header__logo">
                    <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                  </div>
                </div>
              </div>
              <Transition location={this.props.location}>{children}</Transition>
            </div>
            {/* END CONTENT */}
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout

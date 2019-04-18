import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from 'src/utils/typography'
import styled, { css } from 'styled-components'
import { NavContext } from 'src/layouts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faComments, faMap, faNewspaper, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import WhitewoodTexture from 'src/images/whitewood-texture-4.png'


const MobileOnlyTopBar = styled.div`
  ${tw``};
  background-image: url('${WhitewoodTexture}');
`


const TopBarStyled = styled.div`
  ${tw`px-0 md:px-2`};
  background-color: ${props => props.theme.primaryColor};
`
const LinkStyles = css`
  ${tw`inline-block py-2 no-underline text-xs font-bold uppercase`};
  background-color: transparent;
`
const ExternalLink = styled.a`
  ${() => LinkStyles}
  color: ${props => (props.emphasized ? props.theme.secondaryColor : 'white')}!important;
  &:hover {
  color: ${props => (props.emphasized ? 'white' : props.theme.secondaryColor)}!important;
  }
`
const InternalLink = styled(Link)`
  ${() => LinkStyles}
  color: ${props => (props.emphasized ? props.theme.secondaryColor : 'white')}!important;
  &:hover {
  color: ${props => (props.emphasized ? 'white' : props.theme.secondaryColor)}!important;
  }
`
const MobileBarWrapper = styled.div`
  ${tw`lg:hidden container mx-auto px-0 flex justify-between`};
`

const ButtonLink = styled.button`
  ${tw`p-2`};
  width: 6.5rem;
  background-color: ${props => props.active ? props.theme.secondaryColor : props.theme.primaryColor};
  color: ${props => props.active ? props.theme.primaryColor : props.theme.secondaryColor };
`




class Topbar extends React.Component {
  constructor(props) {
    super(props)

    this.triggerChat = () => {
      window.Tawk_API.toggle()
    }
  }

  render() {

    return (
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
              {/* <MobileOnlyTopBar>
                <button type="button" onClick={this.triggerChat}><FontAwesomeIcon icon={faComments} fixedWidth size="1x" /> Chat Now</button>
                <a href="tel:4123213">Call Now</a>
              </MobileOnlyTopBar> */}
              <TopBarStyled>
                {/* DESKTOP  */}
                <div className="hidden lg:flex container mx-auto px-1 justify-between">
                  <div>
                    <ExternalLink  href="tel:1-508-238-2387" className="ml-6">
                      <FontAwesomeIcon icon={faPhone} fixedWidth size="1x" /> Call Us (508)-238-2387 
                    </ExternalLink>
                    <InternalLink emphasized to="/interactive-map" className="ml-4">
                      <FontAwesomeIcon icon={faMap} fixedWidth size="1x" /> Interactive Map 
                    </InternalLink>
                  </div>
                  <div>
                    <InternalLink emphasized
                      to="/news"
                      className="mr-6"
                    >
                      <FontAwesomeIcon icon={faNewspaper} fixedWidth size="1x" /> News
                    </InternalLink>
                    <ExternalLink
                      href="https://maplewood.campintouch.com/v2/login/login.aspx?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faSignInAlt} fixedWidth size="1x" /> Summer Login
                    </ExternalLink>
                  </div>
                </div>
                {/* END DESKTOP */}

                {/* MOBILE */}
                <MobileBarWrapper>
                  {!datesRatesOverlayVisible ? (
                    <ButtonLink type="button" onClick={toggleDatesRatesOverlay}>
                      <span>Dates &amp; Rates</span>
                    </ButtonLink>
                  ) : (
                    <ButtonLink active type="button" onClick={closeAllOverlays}>
                      Close
                    </ButtonLink>
                  )}
                  {enrollNowOverlayVisible || enrollCampOverlayVisible || enrollSchoolOverlayVisible ? (
                    <ButtonLink type="button" onClick={closeAllOverlays}>
                      Close
                    </ButtonLink>
                  ) : (
                    <ButtonLink type="button" onClick={toggleEnrollNowOverlay}>
                      Enroll Now
                    </ButtonLink>
                  )}
                </MobileBarWrapper>
                {/* END MOBILE */}
              </TopBarStyled>
            </>
          )}
        </NavContext.Consumer>
    )
  }
}


export default Topbar

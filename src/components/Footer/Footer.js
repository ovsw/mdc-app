import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faYoutube,
  faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons'
import acaLogo from 'src/images/aca-logo.png'

const FooterStyled = styled.footer`
  ${tw`px-2 pt-10 pb-8 mt-0 bg-green-brand text-white`};
  ${tw`xl:w-1/2 xl:mr-auto md:px-4`};
  box-shadow: inset -5px 0 10px rgba(51, 50, 15, 0.23);

  a {
    color: ${props => props.theme.secondaryColorLight};

    &:hover {
      ${tw`text-yellow-brand`};
    }
  }
`
const Wrapper = styled.div`
  ${tw`container mx-auto md:flex`};
`
const LeftColumn = styled.div`
  ${tw` text-center md:text-left text-sm md:text-left pt-6`};
`
const RightColumn = styled.div`
  ${tw`flex-1 md:pt-4`};
`
const Icons = styled.div`
  ${tw`flex justify-center md:justify-end  px-10 md:px-0`};
`

const SocialIcon = styled.a`
  color: white !important;
  ${tw`text-3xl mx-2`};
  ${tw`md:ml-2 md:mr-0`};
  &:hover {
    color: ${props => props.theme.secondaryColorLight}!important;
  }
`
const SeoText = styled.p`
  ${tw`container mt-6 md:mt-4 text-xs`};
  color: #a2c5a6;
`
const CopyRight = styled.div`
  ${tw`text-center text-xs`};
  color: #a2c5a6;
`
const FooterTitle = styled.h4`
  ${tw`border-b-2`};
  ${tw`text-2xl md:text-base`};
  ${tw`md:border-0`};
  ${tw`pb-4 md:pb-0`};
`

const AffiliateLogo = styled.img`
  ${tw`block mx-auto mt-4 md:mt-4`};
  max-width: 200px;
  ${media.md`max-width:125px`};
`

const Footer = () => (
  <FooterStyled>
    <Wrapper>
      <LeftColumn>
        <FooterTitle>Maplewood Day Camp & Enrichment Center</FooterTitle>
        <a href="tel:508-238-2387">(508) 238-2387</a> -{' '}
        <a href="mailto:info@maplewoodyearround.com">info@maplewoodyearround.com</a> <br />
        150 Foundry Street, <br />
        South Easton, MA, 02375 United States
        <SeoText>
          Serving Greater Boston area and Rhode Island and located near the following towns: Easton, Sharon, Mansfield,
          Norton, Canton, Stoughton, Bridgewater, Raynham, Taunton, Foxboro, Brockton, Walpole, Middleboro, Franklin,
          Wrentham, and Plainville.
        </SeoText>
      </LeftColumn>
      <RightColumn>
        <Icons>
          <SocialIcon
            name="Maplewood Facebook Page"
            aria-label="visit the Maplewood Facebook Page"
            href="https://www.facebook.com/MaplewoodKids/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </SocialIcon>
          <SocialIcon
            name="Maplewood Instagram Page"
            aria-label="visit the Maplewood Instagram Page"
            href="https://www.instagram.com/maplewood_country_day_camp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
          <SocialIcon
            name="Maplewood Youtube Channel"
            aria-label="visit the Maplewood Youtube Channel Page"
            href="https://www.youtube.com/user/MaplewoodKids"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </SocialIcon>
          <SocialIcon
            name="Maplewood Twitter Page"
            aria-label="visit the Maplewood Twitter Page"
            href="https://twitter.com/maplewoodkids"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </SocialIcon>
          <SocialIcon
            name="Maplewood Pinterest Page"
            aria-label="visit the Maplewood Pinterest Page"
            href="https://www.pinterest.com/maplewoodday/pins/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPinterestSquare} />
          </SocialIcon>
        </Icons>
        <AffiliateLogo src={acaLogo} alt="American Camp Association Logo" />
      </RightColumn>
    </Wrapper>

    <CopyRight>
      copyright &copy;2013-{new Date().getFullYear()} Maplewood Country Day Camp & Enrichment Center | website by{' '}
      <a href="https://ovswebsites.com/" target="_blank" rel="noopener noreferrer">
        OVS Websites
      </a>
    </CopyRight>
  </FooterStyled>
)

export default Footer

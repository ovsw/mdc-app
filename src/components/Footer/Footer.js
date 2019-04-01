import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import acaLogo from 'src/images/aca-logo.png'

const FooterStyled = styled.footer`
  ${tw`px-2 py-4 mt-0 bg-green-brand text-white`};
  ${tw`xl:w-1/2 xl:mr-auto xl:px-8`};
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
  ${tw`text-sm md:text-left pt-6`};
`
const RightColumn = styled.div`
  ${tw`flex-1 md:pt-4`};
`
const Icons = styled.div`
  ${tw`flex justify-center md:justify-end px-10 md:px-0`};
`

const SocialIcon = styled.a`
  color: white !important;
  ${tw`text-3xl mx-4`};
  ${tw`md:ml-2 md:mr-0`};
  &:hover {
    color: ${props => props.theme.secondaryColorLight}!important;
  }
`
const SeoText = styled.p`
  ${tw`container mt-4 text-xs`};
  color: #a2c5a6;
`
const CopyRight = styled.div`
  ${tw` text-xs`};
  color: #a2c5a6;
`

const Footer = () => (
  <FooterStyled>
    <Wrapper>
      <LeftColumn>
        <h4
          className="border-b-2 
          pb-4 mx-4 md:mx-0 md:mb-1
          border-yellow-brand-light md:border-0
          text-2xl md:text-base"
        >
          Maplewood Day Camp & Enrichment Center
        </h4>
        <a href="tel:508-238-2387">(508) 238-2387</a> -{' '}
        <a href="mailto:info@maplewoodyearround.com">info@maplewoodyearround.com</a> <br />
        150 Foundry Street, <br />
        South Easton, MA, 02375 United States
        <SeoText>
          Serving Greater Boston area and Rhode Island and located near the following towns: Easton, Sharon, Mansfield,
          Norton, Canton, Stoughton, Bridgewater, Raynham, Taunton, Foxboro, Brockton, Walpole, Middleboro.
        </SeoText>
      </LeftColumn>
      <RightColumn>
        <Icons>
          <SocialIcon href="https://www.facebook.com/MaplewoodKids/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </SocialIcon>
          <SocialIcon
            href="/https://www.instagram.com/maplewood_country_day_camp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
          <SocialIcon href="https://www.youtube.com/user/MaplewoodKids" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/maplewoodkids" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </SocialIcon>
        </Icons>
        <img src={acaLogo} alt="American Camp Association Logo" />
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

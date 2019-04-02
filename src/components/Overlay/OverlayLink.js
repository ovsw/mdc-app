import React from 'react'
import { Link } from 'gatsby'
import { FakeButton } from 'src/components/common/Button'
import styled from 'styled-components'
import media from 'src/components/responsive'

import MapImage from 'src/images/mdc-map.jpg'
import PaperTexture from 'src/images/paper-texture.png'

import scDatesRatesImg from 'src/images/overlayBgs/scDatesRates.jpg'
import syDatesRatesImg from 'src/images/overlayBgs/syDatesRates.jpg'
import scEnrollNewImg from 'src/images/overlayBgs/scEnrollNew.jpg'
import syEnrollReturnImg from 'src/images/overlayBgs/scEnrollReturn.jpg'
import syClassesImg from 'src/images/overlayBgs/syClasses.jpg'
import syEventsImg from 'src/images/overlayBgs/syEvents.jpg'
import syPreImg from 'src/images/overlayBgs/syPre.jpg'
import syAfterImg from 'src/images/overlayBgs/syAfter.jpg'
import syVacationImg from 'src/images/overlayBgs/syVacation.jpg'
import syBirthdaysImg from 'src/images/overlayBgs/syBirthdays1.jpg'
import infoTourImg from 'src/images/overlayBgs/infoTour.jpg'
import infoEventImg from 'src/images/overlayBgs/infoEvent.jpg'
import infoSpeakImg from 'src/images/overlayBgs/infoSpeak.jpg'
import infoContactImg from 'src/images/overlayBgs/infoContact.jpg'
import MainLink from './MainLink'

const TextWrapper = styled.span`
  ${tw`text-xl md:text-2xl xl:text-3xl xl:mx-4`};
  line-height: 1;
`
const LinkTitle = styled.span`
  ${tw`pb-2 inline-block md:pb-4`};
  font-family: ${props => props.theme.fontHeading};
  font-weight: 400;
`
const LinkButton = styled(FakeButton)`
  ${tw`text-base block px-2 mx-auto lg:px-4`};
`
const IconWrapper = styled.span`
  ${tw`pr-1 lg:pr-2`};
`

const bgImages = {
  scDatesRates: scDatesRatesImg,
  syDatesRates: syDatesRatesImg,
  scEnroll: scDatesRatesImg,
  scNew: scEnrollNewImg,
  scReturning: syEnrollReturnImg,
  syEnroll: syDatesRatesImg,
  syClasses: syClassesImg,
  syEvents: syEventsImg,
  syPre: syPreImg,
  syAfter: syAfterImg,
  syVacation: syVacationImg,
  syBirthdays: syBirthdaysImg,
  infoTour: infoTourImg,
  infoEvent: infoEventImg,
  infoSpeak: infoSpeakImg,
  infoContact: infoContactImg,
}

export const OverlayLink = ({ linkTitle, linkSubtitle, linkUrl, label, click, ofTwo, icon }) => (
  <MainLink ofTwo={ofTwo} bgImage={bgImages[label]} style={{ backgroundImage: `${MapImage}` }}>
    {linkUrl.indexOf('https') !== 0 ? (
      <Link to={linkUrl} onClick={click}>
        <TextWrapper>
          {linkTitle && <LinkTitle>{linkTitle}</LinkTitle>}
          <LinkButton primary light>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            {linkSubtitle}
          </LinkButton>
        </TextWrapper>
      </Link>
    ) : (
      <a href={linkUrl} onClick={click} rel="noopener noreferrer" target="_blank">
        <TextWrapper>
          {linkTitle && <LinkTitle>{linkTitle}</LinkTitle>}
          <LinkButton primary light>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            {linkSubtitle}
          </LinkButton>
        </TextWrapper>
      </a>
    )}
  </MainLink>
)

export const IntOverlayLink = ({ linkTitle, linkSubtitle, label, click, ofTwo, icon }) => (
  <MainLink ofTwo={ofTwo} bgImage={bgImages[label]} style={{ backgroundImage: MapImage }}>
    <a href="#" onClick={click}>
      <TextWrapper>
        {linkTitle && <LinkTitle>{linkTitle}</LinkTitle>}
        <LinkButton primary light>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          {linkSubtitle}
        </LinkButton>
      </TextWrapper>
    </a>
  </MainLink>
)

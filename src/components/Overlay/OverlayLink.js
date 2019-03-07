import React from 'react'
import { Link } from 'gatsby'
import { FakeButton } from 'src/components/common/Button'
import styled from 'styled-components'
import media from 'src/components/responsive'

const MainLink = styled.div`
  ${tw`flex-grow flex items-center text-white text-sm items-stretch text-center`};
  ${tw`border-white border-t-2 border-r-2 `};
  background-position: center center;
  background-size: cover;
  width: ${props => (props.ofTwo ? 'auto' : '50%')};
  ${media.lg`width: w-1/2`};

  background-image: ${props => {
    switch (props.label) {
      case 'scDatesRates':
        return "url('https://www.datocms-assets.com/9361/1548756509-dsc1067.jpg?auto=compress,enhance')"
      case 'syDatesRates':
        return "url('https://www.datocms-assets.com/9361/1548757569-friends.jpg?auto=compress,enhance')"
      case 'scEnroll':
        return "url('https://www.datocms-assets.com/9361/1548167096-groupswim.jpg?auto=compress,enhance')"
      case 'syEnroll':
        return "url('https://www.datocms-assets.com/9361/1548757424-comcasthappyfriends.jpg?auto=compress,enhance')"
      case 'syClasses':
        return "url('https://www.datocms-assets.com/9361/1549518531-campbus.jpg?auto=compress,enhance&w=450&h=250&fit=crop&crop=faces,entropy')"
      case 'syEvents':
        return "url('https://www.datocms-assets.com/9361/1548096297-42930620101567348511791584770250631833190400n.jpg?auto=compress,enhance&fit=facearea&w=850&h=450&facepad=10')"
      case 'syPre':
        return "url('https://www.datocms-assets.com/9361/1549534145-preshcool-and-kindergarten-bannner.jpg?auto=compress,enhance&w=450&h=250&fit=crop&crop=faces,entropy')"
      case 'syAfter':
        return "url('https://www.datocms-assets.com/9361/1548167265-img7465.jpg?auto=compress,enhance&w=450&h=250&fit=crop&crop=faces,entropy')"
      case 'syVacation':
        return "url('https://www.datocms-assets.com/9361/1549535582-summer-camp-grades-1-7-boys-group.jpg?auto=compress,enhance&fit=facearea&w=850&h=450&facepad=10')"
      default:
        return "url('https://www.datocms-assets.com/9361/1548756509-dsc1067.jpg?auto=compress,enhance')"
    }
  }};

  a {
    ${tw`flex flex-1 items-center text-center justify-center no-underline`};
    background-color: rgba(0, 102, 0, 0.7);

    &:hover {
      color: yellow;
      background-color: rgba(0, 102, 0, 0.6);
    }
  }
`
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

export const OverlayLink = ({ linkTitle, linkSubtitle, linkUrl, label, click, ofTwo, icon }) => (
  <MainLink label={label} ofTwo={ofTwo}>
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
  <MainLink label={label} ofTwo={ofTwo}>
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

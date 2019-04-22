import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const ButtonPrimary = css`
  ${tw`relative px-6`};
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
  transition: all 0.5s ease;

  &:before {
    content: '';
    position: absolute;
    top: 3px;
    right: 3px;
    bottom: 3px;
    left: 3px;
    margin: 3px;
    border-radius: inherit;
    border: 1px solid ${props => props.theme.primaryColor};
  }

  &:hover {
    color: ${props => props.theme.lightColor};
    background-color: ${props => props.theme.primaryColor}!important;
    &:before {
      border-color: ${props => props.theme.lightColor};
    }
  }
`

const ButtonDark = css`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  &:before {
    border-color: white;
  }
  &:hover {
    color: ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.secondaryColor}!important;
    &:before {
      border-color: ${props => props.theme.primaryColor};
    }
  }
`
const ButtonLight = css`
  background-color: white;
  color: ${props => props.theme.primaryColor};
  &:before {
    border-color: ${props => props.theme.primaryColor};
  }
  &:hover {
    color: ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.secondaryColor}!important;
    &:before {
      border-color: ${props => props.theme.primaryColor};
    }
  }
`

const ButtonStyles = css`
  ${tw`bg-grey-dark text-black py-3 px-5 cursor-pointer no-underline inline-block`};
  
  ${props => (props.primary ? ButtonPrimary : ``)}

  ${props => (props.dark ? ButtonDark : ``)}
  ${props => (props.light ? ButtonLight : ``)}

  &:hover {
    ${tw`bg-grey-light`};
  }
`

export const FakeButton = styled.button`
  ${() => ButtonStyles}
`

export const LinkButton = styled(Link)`
  ${() => ButtonStyles}
`

export const AnchorButton = styled.a`
  ${() => ButtonStyles}
`

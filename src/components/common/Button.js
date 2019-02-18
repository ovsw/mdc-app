import styled, { css } from 'styled-components'

const ButtonPrimary = css`
  ${tw`relative`};
  transition: all 0.5s ease;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 5px;
    border-radius: inherit;
    border: 1px solid white;
  }
`

const ButtonDark = css`
  background-color: ${props => props.theme.primaryColor};
  color: white;
`
const ButtonLight = css`
  background-color: white;
  color: ${props => props.theme.primaryColor};
  &:before {
    border-color: ${props => props.theme.primaryColor};
  }
  &:hover {
    background-color: ${props => props.theme.secondaryColor}!important;
  }
`

const Button = styled.button`
  ${tw`bg-grey-dark text-black font-bold py-3 px-5 cursor-pointer no-underline inline-block`};
  
  ${props => (props.primary ? ButtonPrimary : ``)}

  ${props => (props.dark ? ButtonDark : ``)}
  ${props => (props.light ? ButtonLight : ``)}


  &:hover {
    ${tw`bg-grey-light`};
  }
`

export default Button

import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import media from 'src/components/responsive'
import { LinkButton } from 'src/components/common/Button'

const linkStyles = css`
  ${tw`relative w-full justify-center items-center text-center leading-none`};
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.primaryColor};
  display: ${props => (props.visible === 'true' ? 'flex' : 'none')};

  ${media.xl`${tw`text-3xl flex-1`};`}

  &:before {
    ${tw`absolute text-center`}
    content: '';
    top: 5px;
    bottom: 5px;
    left: 5px;
    right: 5px;
    border: 1px solid ${props => props.theme.primaryColor};
  }

  &:hover {
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    &:before {
      border: 1px solid ${props => props.theme.secondaryColor};
    }
  }
`

const InternalLink = styled(LinkButton)`
  ${() => linkStyles}
`
const ExternalLink = styled.a`
  ${() => linkStyles}
  text-decoration: none;
`

class CTAMobileBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isShown: false }
    this.show = this.show.bind(this)
  }

  componentDidMount() {
    if (window.innerWidth < 768) {
      window.addEventListener('scroll', this.show)
    } else {
      this.setState({ isShown: true })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hide)
  }

  show() {
    if (window.scrollY > 200) {
      this.setState({ isShown: true })
    } else {
      this.setState({ isShown: false })
    }
  }

  hide() {
    this.setState({ isShown: false })
  }

  render() {
    const {
      props: { children, to },
      state: { isShown },
    } = this

    return (
      <>
        {to.indexOf('https') !== 0 ? (
          <InternalLink to={to} visible={isShown.toString()}>
            {children}
          </InternalLink>
        ) : (
          <ExternalLink href={to} visible={isShown.toString()} target="_blank" rel="noopener noreferrer">
            {children}
          </ExternalLink>
        )}
      </>
    )
  }
}

export default CTAMobileBtn

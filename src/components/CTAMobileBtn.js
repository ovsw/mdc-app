import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from 'src/components/responsive'
import Button from 'src/components/common/Button'

const CTAMobileBtnStyled = styled(Button)`
  ${tw`fixed pin-b pin-l pin-r h-12 w-full`};
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.primaryColor};
  display: ${props => (props.visible ? 'block' : 'none')};

  ${media.xl`${tw`w-1/2 pin-none pin-r pin-b h-32 text-3xl`};`}

  &:before {
    ${tw`absolute text-center`}
    content: '';
    top: 5px;
    bottom: 5px;
    left: 5px;
    right: 5px;
    border: 1px solid ${props => props.theme.primaryColor};
  }
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
      props: { children },
      state: { isShown },
    } = this

    return (
      <CTAMobileBtnStyled to="/" visible={isShown}>
        {children}
      </CTAMobileBtnStyled>
    )
  }
}

export default CTAMobileBtn

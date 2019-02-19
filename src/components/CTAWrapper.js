import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from 'src/components/responsive'
import { LinkButton } from 'src/components/common/Button'

const CTAWrapperStyled = styled.div`
  ${tw`flex fixed pin-b pin-l pin-r h-12 w-full`}
  ${media.xl`${tw`w-1/2 pin-none pin-r pin-b h-32`};`}
`

const CTAWrapper = ({ children }) => <CTAWrapperStyled>{children}</CTAWrapperStyled>

export default CTAWrapper

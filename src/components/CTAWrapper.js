import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const CTAWrapperStyled = styled.div`
  ${tw`flex fixed pin-b pin-l pin-r h-12 w-full`}
  ${media.xl`${tw`w-1/2 pin-none pin-r pin-b h-32`}; padding-left: 3px;`}
`

const CTAWrapper = ({ children }) => <CTAWrapperStyled>{children}</CTAWrapperStyled>

export default CTAWrapper

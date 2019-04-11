import React from 'react'
import styled from 'styled-components'

const CtaBlockStyled = styled.div`
  ${tw`py-6 px-8  bg-green-brand text-white font-primary`};
  boxshadow: 'inset -5px 0 10px rgba(51, 50, 15, .23)';
`

const CtaBlock = ({ children }) => <CtaBlockStyled>{children}</CtaBlockStyled>

export default CtaBlock

import React from 'react'
import styled from 'styled-components'

const PageSectionStyled = styled.div`
  ${tw`my-16`};
`

const PageSection = ({ children }) => <PageSectionStyled>{children}</PageSectionStyled>

export default PageSection

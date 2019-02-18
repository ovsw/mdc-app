import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const MainContentWrapperStyled = styled.div`
  ${tw`py-px xl:w-1/2 xl:mr-auto`};
  background-color: #fffcfa;
  color: ${props => props.theme.bodyColor};
  ${media.lg`box-shadow: inset -5px 0 10px rgba(51, 50, 15, 0.23);`}
`

const MainContentWrapper = ({ children }) => <MainContentWrapperStyled>{children}</MainContentWrapperStyled>

export default MainContentWrapper

import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const MainContentWrapperStyled = styled.div`
  ${tw`py-px xl:w-1/2 xl:mr-auto`};
  border-top: 4px solid ${props => props.theme.primaryColor};
  background-color: #fffcfa;
  color: ${props => props.theme.bodyColor};
  ${media.lg`border-right: 3px solid green`} // box-shadow: inset -5px 0 10px rgba(51, 50, 15, 0.23);
`

const MainContentWrapper = ({ children }) => <MainContentWrapperStyled>{children}</MainContentWrapperStyled>

export default MainContentWrapper

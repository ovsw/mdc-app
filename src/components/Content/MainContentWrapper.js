import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const MainContentWrapperStyled = styled.div`
  ${tw`xl:w-1/2 xl:mr-auto`};
  border-top: 4px solid ${props => props.theme.primaryColor};
  
  color: ${props => props.theme.bodyColor};
`

const MainContentWrapper = ({ children }) => <MainContentWrapperStyled>{children}</MainContentWrapperStyled>

export default MainContentWrapper

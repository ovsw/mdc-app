import React from 'react'
import styled from 'styled-components'

const MainContentWrapperStyled = styled.div`
  ${tw`xl:w-1/2 xl:mr-auto`};

  color: ${props => props.theme.bodyColor};
`
// border-top: 4px solid ${props => props.theme.primaryColor};
const MainContentWrapper = ({ children }) => <MainContentWrapperStyled>{children}</MainContentWrapperStyled>

export default MainContentWrapper

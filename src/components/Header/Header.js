import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

import Logoimage from 'src/components/Logoimage/Logoimage'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'

const MainHeader = styled.header`
  ${tw`fixed pin-x pin-t w-full z-10`};
  border-bottom: 3px solid ${props => props.theme.primaryColor};
  ${media.lg`border-bottom: 6px solid ${props => props.theme.primaryColor}`};
  box-shadow: 0 5px 10px rgba(51, 50, 10, 0.1);
`

const Header = () => (
  <>
    <Logoimage />

    <MainHeader>
      <Topbar />
      <Navbar />
    </MainHeader>
  </>
)

export default Header

import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'
import { rhythm } from 'src/utils/typography'

import Logoimage from 'src/components/Logoimage/Logoimage'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'

const MainHeader = styled.header`
  ${tw`fixed pin-x pin-t w-full z-10`};
  border-bottom: 3px solid green;
  ${media.lg`border-bottom: 6px solid green;`};
  box-shadow: 0 5px 10px rgba(51, 50, 10, 0.1);
`

const Header = props => (
  <>
    <Logoimage />

    <MainHeader
      style={
        {
          // paddingTop: rhythm(1),
          // paddingBottom: rhythm(1),
        }
      }
    >
      <Topbar />
      <Navbar />
    </MainHeader>
  </>
)

export default Header

import React from 'react'
import { rhythm } from 'src/utils/typography'

import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'

const Header = props => (
  <>
    <header
      className="fixed pin-x pin-t shadow w-full z-10"
      style={
        {
          // paddingTop: rhythm(1),
          // paddingBottom: rhythm(1),
          // background: 'linear-gradient(to right, #0ba360 0%, #3cba92 100%)',
        }
      }
    >
      <Topbar />
      <Navbar />
    </header>
  </>
)

export default Header

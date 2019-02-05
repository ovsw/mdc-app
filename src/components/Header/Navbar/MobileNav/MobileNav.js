import React from 'react'
import { Link } from 'gatsby'

import MobileNavDropDown from './MobileNavDropDown/MobileNavDropDown'

const MobileNav = ({ aboutNav, familiesNav, staffNav, toggleMobileNav }) => (
  <>
    <ul className="list-reset m-0 ">
      <MobileNavDropDown menuTitle="About Maplewood" menuModel={aboutNav[0]} toggleMobileNav={toggleMobileNav} />
      <MobileNavDropDown menuTitle="About Summer Camp" menuModel={aboutNav[1]} toggleMobileNav={toggleMobileNav} />
      <MobileNavDropDown menuTitle="About Year Round" menuModel={aboutNav[2]} toggleMobileNav={toggleMobileNav} />

      <MobileNavDropDown
        menuTitle="Maplewood Families"
        menuModel={[...familiesNav[0], ...familiesNav[1], ...familiesNav[2]]}
        toggleMobileNav={toggleMobileNav}
      />

      <MobileNavDropDown
        menuTitle="Staff"
        menuModel={[...staffNav[1], ...staffNav[2]]}
        toggleMobileNav={toggleMobileNav}
      />
    </ul>
  </>
)

export default MobileNav

import React from 'react'
import Megamenu from 'src/components/Header/Navbar/Desktopnav/Megamenu/Megamenu'
import CtaLinks from 'src/components/Header/Navbar/CtaLinks/CtaLinks'

const DesktopNav = ({ aboutNav, familiesNav, staffNav, closeAllOverlays }) => (
  <ul className="list-reset m-0 py-2 px-2 flex items-center">
    <Megamenu menuTitle="About Us" menuModel={aboutNav} closeAllOverlays={closeAllOverlays} />
    <Megamenu menuTitle="Maplewood Families" menuModel={familiesNav} closeAllOverlays={closeAllOverlays} />
    <li className="m-0 text-center flex-auto" />
    <Megamenu menuTitle="Staff" menuModel={staffNav} closeAllOverlays={closeAllOverlays} />

    <li className="m-0 text-center w-2/6">
      <CtaLinks />
    </li>
  </ul>
)

export default DesktopNav

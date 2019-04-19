import React from 'react'

import CtaLinks from 'src/components/Header/Navbar/CtaLinks/CtaLinks'

import MobileNavDropDown from './MobileNavDropDown/MobileNavDropDown'

const MobileNav = ({ aboutNav, familiesNav, staffNav, toggleMobileNav }) => (
  <div>
    <div className="border-b border-white mb-6" style={{ height: '90px' }} />
    <CtaLinks />
    <ul className="list-reset ml-0 mt-4">
      <MobileNavDropDown menuTitle="About Maplewood" menuModel={aboutNav[0]} toggleMobileNav={toggleMobileNav} />
      <MobileNavDropDown menuTitle="Summer Camp" menuModel={aboutNav[1]} toggleMobileNav={toggleMobileNav} />
      <MobileNavDropDown menuTitle="School Year" menuModel={aboutNav[2]} toggleMobileNav={toggleMobileNav} />

      <MobileNavDropDown
        menuTitle="Maplewood Families"
        menuModel={[...familiesNav[0], ...familiesNav[1]]}
        toggleMobileNav={toggleMobileNav}
      />

      <MobileNavDropDown
        menuTitle="Staff"
        menuModel={[...staffNav[1], ...staffNav[2]]}
        toggleMobileNav={toggleMobileNav}
      />
    </ul>
    {/* <div>
      <p>
        Call Us: <a href="tel:1-508-238-2387">(508) 238-2387</a>
      </p>
    </div> */}
  </div>
)

export default MobileNav

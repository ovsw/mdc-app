import React from 'react'
import { Link } from 'gatsby'
import Megamenu from 'src/components/Header/Navbar/Desktopnav/Megamenu/Megamenu'

import styles from './Desktopnav.module.css'

class DesktopNav extends React.Component {
  render() {
    const { aboutNav } = this.props
    return (
      <ul className="list-reset m-0 py-2 px-2 flex items-center">
        <Megamenu menuModel={aboutNav} />
        <li className="m-0 text-center w-1/4">
          <a className={styles.mainMenuLink}>Shibley Families</a>
        </li>
        <li className="m-0 text-center flex-auto" />
        <li className="m-0 text-center w-2/12">
          <a className={styles.mainMenuLink}>Staff</a>
        </li>
        <li className="m-0 text-center w-2/6">
          <ul
            className="list-reset m-0 flex"
            // style={{ background: 'linear-gradient(to left, rgb(11, 163, 96) 0%, rgb(54, 124, 43) 100%)' }}
          >
            <li className={styles.quickLink}>
              <a href="/">
                Dates &amp;
                <br /> Rates
              </a>
            </li>
            <li className={styles.quickLink}>
              <a href="/">
                Enroll <br />
                Now
              </a>
            </li>
            <li className={styles.quickLink}>
              <a href="/">
                Request <br />
                Info
              </a>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}

export default DesktopNav

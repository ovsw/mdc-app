import React from 'react'
import { Link } from 'gatsby'
import { NavContext } from 'src/layouts'

import logo from 'src/images/maplewood-web-logo.png'

import styles from './Logoimage.module.css'

const LogoImage = () => (
  <NavContext.Consumer>
    {({ closeAllOverlays }) => (
      <>
        <Link to="/" className={styles.logo} onClick={closeAllOverlays}>
          <img src={logo} className={styles.image} alt="Maplewood Contry Day Camp logo" />
        </Link>
      </>
    )}
  </NavContext.Consumer>
)

export default LogoImage

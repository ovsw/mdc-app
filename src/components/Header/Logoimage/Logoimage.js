import React from 'react'
import { Link } from 'gatsby'
import logo from 'src/images/maplewood-web-logo3.png'

import styles from './Logoimage.module.css'

const LogoImage = () => (
  <Link to="/" className={styles.logo}>
    <img src={logo} className={styles.image} alt="Maplewood Contry Day Camp logo" />
  </Link>
)

export default LogoImage

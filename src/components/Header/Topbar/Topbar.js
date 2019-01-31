import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from 'src/utils/typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSignInAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import styles from './Topbar.module.css'

const Topbar = props => (
  <>
    <div
      className="px-4 gradient-green"
      style={{
        paddingTop: rhythm(0.25),
        paddingBottom: rhythm(0.25),
      }}
    >
      {/* DESKTOP  */}
      <div className="hidden lg:flex container mx-auto px-1 justify-between">
        <div>
          <a href="tel:1-508-238-2387" className={styles.link}>
            Call Us (508)-238-2387 <FontAwesomeIcon icon={faPhone} fixedWidth size="1x" />
          </a>
        </div>
        <div>
          <Link
            to="/"
            className={`${styles.link} text-yellow-brand-light hover:text-white`}
            style={{ marginRight: '1rem' }}
          >
            <FontAwesomeIcon icon={faNewspaper} fixedWidth size="1x" /> Blog
          </Link>
          <Link to="/" className={styles.link}>
            <FontAwesomeIcon icon={faSignInAlt} fixedWidth size="1x" /> Parent Login
          </Link>
        </div>
      </div>

      <div className="lg:hidden container mx-auto px-1 flex justify-between">
        <Link to="/" className={styles.link}>
          Dates &amp; Rates
        </Link>
        <Link to="/" className={styles.link}>
          Request Info
        </Link>
      </div>
      {/* END DESKTOP */}
    </div>
  </>
)

export default Topbar

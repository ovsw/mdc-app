import React from 'react'
import { Link } from 'gatsby'
import styles from './OverlayLink.module.css'

const OverlayLink = ({ linkTitle, linkSubtitle, linkUrl, label, click }) => (
  <div className={`${styles.mainLink} ${styles[label]}`}>
    {linkUrl.indexOf('https') !== 0 ? (
      <Link to={linkUrl} onClick={click}>
        <span className={styles.textWrapper}>
          <span className={styles.linkTitle}>{linkTitle}</span>
          <br /> <span className={styles.subHeading}>{linkSubtitle}</span>
        </span>
      </Link>
    ) : (
      <a href={linkUrl} onClick={click} rel="noopener noreferrer" target="_blank">
        <span className={styles.textWrapper}>
          <span className={styles.linkTitle}>{linkTitle}</span>
          <br /> <span className={styles.subHeading}>{linkSubtitle}</span>
        </span>
      </a>
    )}
  </div>
)

export default OverlayLink

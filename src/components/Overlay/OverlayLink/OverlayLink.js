import React from 'react'
import styles from './OverlayLink.module.css'

const OverlayLink = ({ linkTitle, linkSubtitle, linkUrl, label }) => (
  <div className={`${styles.mainLink} ${styles[label]}`}>
    <a href={linkUrl}>
      <span className={styles.textWrapper}>
        <span className={styles.linkTitle}>{linkTitle}</span>
        <br /> <span className={styles.subHeading}>{linkSubtitle}</span>
      </span>
    </a>
  </div>
)

export default OverlayLink

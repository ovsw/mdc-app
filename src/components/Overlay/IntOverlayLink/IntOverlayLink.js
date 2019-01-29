import React from 'react'
import styles from '../OverlayLink/OverlayLink.module.css'

const IntOverlayLink = ({ linkTitle, linkSubtitle, click, label }) => (
  <div className={`${styles.mainLink} ${styles[label]}`}>
    <a href="#" onClick={click}>
      <span className={styles.textWrapper}>
        <span className={styles.linkTitle}>{linkTitle}</span>
        <br /> <span className={styles.subHeading}>{linkSubtitle}</span>
      </span>
    </a>
  </div>
)

export default IntOverlayLink

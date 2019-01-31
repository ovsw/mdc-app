import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container mx-auto md:flex">
      <div className="text-center">
        <p className="text-sm md:text-left md:pt-6">
          <h4
            className="border-b-2 
          pb-4 mx-4 md:mx-0 md:mb-1
          border-yellow-brand-light md:border-0
          text-2xl md:text-base"
          >
            Maplewood Day Camp & Enrichment Center
          </h4>
          <a href="tel:508-238-2387">(508) 238-2387</a> -{' '}
          <a href="mailto:info@maplewoodyearround.com">info@maplewoodyearround.com</a> <br />
          150 Foundry Street, <br />
          South Easton, MA, 02375 United States
        </p>
      </div>
      <div className="flex-1 md:pt-4">
        <p className="flex justify-center md:justify-end px-10 md:px-0">
          <a href="/" className={styles.icon}>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="/" className={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className={styles.icon}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="/" className={styles.icon}>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

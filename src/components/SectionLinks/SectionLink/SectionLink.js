import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './SectionLink.module.css'

const SectionLink = ({ item }) => (
  <div
    className="relative 
        w-full md:w-1/2 mb-1 md:mb-0"
  >
    <Link
      to={item.link}
      className="block mx-auto 
            hover:bg-yellow-brand-light
            no-underline"
      style={{ color: '#1c944c' }}
    >
      <Img className="w-full" fluid={item.image.fluid} />

      <div className={`${styles.innerContent} overlaybg-green`}>
        <h3 className="font-bold text-2xl mb-4 mt-4 text-white">{item.title}</h3>
        <div className="btn btn-green-border text-white">Details</div>
      </div>
    </Link>
  </div>
)

export default SectionLink

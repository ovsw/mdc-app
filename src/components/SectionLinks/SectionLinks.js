import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './SectionLinks.module.css'

const SectionLinks = ({ items }) => (
  <section
    className="container mx-auto 
    
    mt-10 mb-10 px-4"
  >
    <h2
      className="mb-8 md:mb-8 md:mt-16
    font-bold text-shadow-yellow-green text-green-brand  text-center
    text-3xl md:text-4xl"
    >
      The fun doesn't end with the summer
    </h2>
    <div className="narrowContent bg-grey-lightest sm:box-shadow-md-yellow-highlight">
      <p>At Maplewood we offer both summer camp and School Year programs!</p>
    </div>

    <div className="flex flex-col md:flex-row ">
      {items.map((item, index) => (
        <div
          className="relative 
        w-full md:w-1/2 md:px-1 
        mb-4"
          key={index}
        >
          <Link
            to={item.link}
            className="block mx-auto 
            bg-green-brand hover:bg-yellow-brand-light
            sm:box-shadow-md-yellow-highlight
            no-underline"
            style={{ color: '#1c944c' }}
          >
            <div className="p-1">
              <Img className="w-full" fluid={item.image.fluid} />
            </div>

            <div className={`${styles.innerContent} overlaybg`}>
              <h3 className="font-bold text-2xl mb-4 mt-4 text-white">{item.title}</h3>
              <div className="btn btn-green-border">Details</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </section>
)

export default SectionLinks

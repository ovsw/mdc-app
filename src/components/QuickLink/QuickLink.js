import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const QuickLink = ({ item }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 px-1">
    <Link
      to={item.link}
      className="block mx-auto overflow-hidden bg-white max-w-full mb-2 md:mb-8 md:mx-2  bg-white hover:text-yellow hover:bg-green no-underline"
      style={{ color: '#1c944c' }}
    >
      <Img className="w-full" fluid={item.image.fluid} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <div className="">Details</div>
      </div>
    </Link>
  </div>
)

export default QuickLink

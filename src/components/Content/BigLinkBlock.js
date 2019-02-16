import React from 'react'
import { Link } from 'gatsby'

const BigLinkBlock = ({ block: { text, buttonText, buttonLink } }) => (
  <div className="flex items-center justify-center">
    <div
      className="text-center mr-4"
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
    <Link className=" btn btn-white-border" to={buttonLink}>
      {buttonText}
    </Link>
  </div>
)

export default BigLinkBlock

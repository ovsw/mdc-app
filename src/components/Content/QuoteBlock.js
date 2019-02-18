import React from 'react'

const QuoteBlock = ({ block }) => (
  <div className="container mx-auto">
    <div className="pullQuoteWrapper">
      <blockquote className="pullQuote">
        <span className="bqstart">“</span>
        <div
          dangerouslySetInnerHTML={{
            __html: block.text,
          }}
        />
        {/* <span className="bqend">”</span> */}
      </blockquote>
    </div>
  </div>
)

export default QuoteBlock

import React from 'react'

const QuoteBlock = ({ htmlText }) => (
  <div className="container mx-auto">
    <div className="pullQuoteWrapper">
      <blockquote className="pullQuote">
        <span className="bqstart">“</span>
        <div
          dangerouslySetInnerHTML={{
            __html: htmlText,
          }}
        />
        {/* <span className="bqend">”</span> */}
      </blockquote>
    </div>
  </div>
)

export default QuoteBlock

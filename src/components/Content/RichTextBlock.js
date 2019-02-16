import React from 'react'

const RichTextBlock = ({ htmlText }) => (
  <div className="container mx-auto">
    <div
      className="narrowContent"
      dangerouslySetInnerHTML={{
        __html: htmlText,
      }}
    />
  </div>
)

export default RichTextBlock

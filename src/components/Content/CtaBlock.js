import React from 'react'

const CtaBlock = ({ children }) => (
  <div
    className="py-6 px-8 sm:mt-20 sm:mb-4 
bg-green-brand text-white font-primary"
    style={{ boxShadow: 'inset -5px 0 10px rgba(51, 50, 15, .23)' }}
  >
    {children}
  </div>
)

export default CtaBlock

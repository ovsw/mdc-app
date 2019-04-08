import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${tw`px-4 pt-4 pb-10 relative`};
  ${tw`sm:mx-16 lg:mx-24 xl:mx-16`};
`

const Quote = styled.blockquote`
  ${tw`my-0 mx-4 px-6 py-8 border-l-0 italic`};
  border-top: 2px solid ${props => props.theme.primaryColor};
  border-bottom: 2px solid ${props => props.theme.primaryColor};
  text-indent: 2.5rem;

  & .bqstart {
    ${tw`roman`};
    color: ${props => props.theme.primaryColor};
    float: left;
    height: 45px;
    margin-top: -1rem;
    padding-top: 2.5rem;
    margin-bottom: -50px;
    font-size: 700%;

    margin-left: -3rem;
  }
`

const QuoteBlock = ({ block }) => (
  <div className="container mx-auto">
    <Wrapper className="pullQuoteWrapper">
      <Quote className="pullQuote">
        <span className="bqstart">“</span>
        <div
          dangerouslySetInnerHTML={{
            __html: block.text,
          }}
        />
        {/* <span className="bqend">”</span> */}
      </Quote>
    </Wrapper>
  </div>
)

export default QuoteBlock

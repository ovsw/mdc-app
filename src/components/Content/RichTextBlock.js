import React from 'react'
import styled from 'styled-components'
import NarrowContent from 'src/components/common/NarrowContent'

const RichTextBlockStyled = styled.div`
  h2,
  h3 {
    color: ${props => props.theme.primaryColor};
    ${tw`mb-6 mt-6`};
  }
  p {
    ${tw`mb-4`};
  }
  ul,
  ol {
    ${tw`ml-6 mb-4`};
  }
`

const RichTextBlock = ({ block }) => (
  <RichTextBlockStyled>
    <NarrowContent>
      <div
        dangerouslySetInnerHTML={{
          __html: block.text,
        }}
      />
    </NarrowContent>
  </RichTextBlockStyled>
)

export default RichTextBlock

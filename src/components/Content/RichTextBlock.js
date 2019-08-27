import React from 'react'
import styled from 'styled-components'
import NarrowContent from 'src/components/common/NarrowContent'

const RichTextBlockStyled = styled.div`
  h2,
  h3 {
    color: ${props => props.theme.primaryColor};
    ${tw`mb-4`};
  }
  p {
    ${tw`mb-4`};
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

import React from 'react'
import styled from 'styled-components'

const PageSectionStyled = styled.div`
  ${tw`py-16 pb-20 mb-0`};
  background-color: ${props => (props.alternate ? '#fdf3e5' : 'transparent')};

  border-top: ${props => (props.bordered ? '2px solid green' : 'none')};

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }
`

const PageSection = props => <PageSectionStyled {...props}>{props.children}</PageSectionStyled>

export default PageSection

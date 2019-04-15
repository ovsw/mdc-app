import React from 'react'
import styled from 'styled-components'

const PageSectionStyled = styled.div`
  ${tw`py-10 md:py-16 pb-20 mb-0`};
  background-color: ${props => (props.alternate ? props.theme.lightColorAlt : props.theme.lightColor)};
  border-top: ${props => (props.bordered ? '1px solid #006600' : 'none')};

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }
`

const PageSection = props => <PageSectionStyled {...props}>{props.children}</PageSectionStyled>

export default PageSection

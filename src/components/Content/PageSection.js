import React from 'react'
import styled from 'styled-components'

const PageSectionStyled = styled.div``

const PageSection = props => <PageSectionStyled {...props}>{props.children}</PageSectionStyled>

export default PageSection

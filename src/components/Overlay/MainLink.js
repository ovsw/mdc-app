import React from 'react'
import styled from 'styled-components'
import media from 'src/components/responsive'

const MainLinkStyled = styled.div`
  ${tw`flex-grow flex items-center text-white text-sm items-stretch text-center`};
  ${tw`border-white border-t-2 border-r-2 `};
  background-position: center center;
  background-size: cover;
  width: ${props => (props.ofTwo ? 'auto' : '50%')};


  background-image: url('${props => props.bgImage}');
/* 
  background-image: ${props => {
    switch (props.label) {
      case 'scDatesRates':
        return "url('https://www.datocms-assets.com/9361/1548756509-dsc1067.jpg?auto=compress,enhance')"
      case 'syDatesRates':
        return "url('https://www.datocms-assets.com/9361/1548757569-friends.jpg?auto=compress,enhance')"
      case 'scEnroll':
        return "url('https://www.datocms-assets.com/9361/1548167096-groupswim.jpg?auto=compress,enhance')"
      case 'syEnroll':
        return "url('https://www.datocms-assets.com/9361/1548757424-comcasthappyfriends.jpg?auto=compress,enhance')"
      case 'syClasses':
        return "url('https://www.datocms-assets.com/9361/1549518531-campbus.jpg?auto=compress,enhance&w=450&h=250&fit=crop&crop=faces,entropy')"
      case 'syEvents':
        return "url('https://www.datocms-assets.com/9361/1548096297-42930620101567348511791584770250631833190400n.jpg?auto=compress,enhance&fit=facearea&w=850&h=450&facepad=10')"
      case 'syPre':
        return "url('https://www.datocms-assets.com/9361/1549534145-preshcool-and-kindergarten-bannner.jpg?auto=compress,enhance&w=450&h=250&fit=crop&crop=faces,entropy')"
      case 'syAfter':
        return "url('https://www.datocms-assets.com/9361/1548167265-img7465.jpg?auto=compress,enhance&w=450&h=250&fit=crop&crop=faces,entropy')"
      case 'syVacation':
        return "url('https://www.datocms-assets.com/9361/1549535582-summer-camp-grades-1-7-boys-group.jpg?auto=compress,enhance&fit=facearea&w=850&h=450&facepad=10')"
      default:
        return "url('https://www.datocms-assets.com/9361/1548756509-dsc1067.jpg?auto=compress,enhance')"
    }
  }}; */

  a {
    ${tw`flex flex-1 items-center text-center justify-center no-underline`};
    background-color: rgba(0, 102, 0, 0.7);

    &:hover {
      color: yellow;
      background-color: rgba(0, 102, 0, 0.6);
    }
  }
`

const MainLink = props => {
  console.log(props)
  return (
    <MainLinkStyled bgImage={props.bgImage} ofTwo={props.ofTwo}>
      {props.children}
    </MainLinkStyled>
  )
}

export default MainLink

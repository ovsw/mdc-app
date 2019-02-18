import { css } from 'styled-components'

const sizes = {
  xxl: 1600,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media

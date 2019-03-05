import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'

funstonTheme.baseFontSize = '20px' // was 20px.

funstonTheme.googleFonts = [
  {
    name: 'Roboto Slab',
    styles: ['300, 400, 700'],
  },
  {
    name: 'Cabin Condensed',
    styles: ['400', '700'],
  },
]

funstonTheme.headerFontFamily = ['Roboto Slab', 'serif']

funstonTheme.headerWeight = '700'

const typography = new Typography(funstonTheme)

export default typography

export const { rhythm, scale, options } = typography

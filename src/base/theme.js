import ScrollBar from './scrollBar'

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl1: 1024,
  xxl2: 1440,
  xxl3: 1500,
}

export const Colors = {
  primary: '#14274E',
  secondary: '#E3B451',
}

const theme = () => ({
  ...Colors,
  navHeight: '4rem',
  sideNavWidth: '277px',
  bgColor: '#F6F9FB',
  scrollBaxMixin: ScrollBar,
  fontFamily: `
  'Nunito Text',-apple-system,BlinkMacSystemFont,"Helvetica Neue",
  "Segoe UI","Oxygen","Ubuntu","Cantarell","Open Sans",sans-serif
  `,
  txtColor: '#555555;',
})

export default theme

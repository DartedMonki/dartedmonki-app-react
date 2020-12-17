import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
})

export default responsiveFontSizes(theme)

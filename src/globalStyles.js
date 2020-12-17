import { withStyles } from '@material-ui/core/styles'

const GlobalStyles = withStyles(() => ({
  '@global': {
    '*': {
      fontFamily: 'Ubuntu, sans-serif',
    },
    html: {
      height: '100%',
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Ubuntu, sans-serif',
      backgroundColor: '#F0F2F5',
    },
    '#root': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    p: {
      marginBlockEnd: 0,
      marginBlockStart: 0,
    },
  },
}))(() => null)

export default GlobalStyles

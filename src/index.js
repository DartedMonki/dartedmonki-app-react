import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import IndexPage from './pages'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './globalStyles'
import GlobalTheme from './globalTheme'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={GlobalTheme}>
      <>
        <GlobalStyles />
        <IndexPage />
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

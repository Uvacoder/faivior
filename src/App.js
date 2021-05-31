import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'
import { Dashboard } from '../src/View'
import theme from './base/theme'
import GlobalStyle from './base/globalStyles'

const App = () => {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      <Toaster />
      <IconContext.Provider value={{ className: 'icon' }}>
        <Switch>
          <Route path="/" exact={true}>
            <Redirect to="/dashboard/?tab=contact" />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App

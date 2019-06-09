import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Routes configuration
import routesConfig from './routes.config'

// Styles
import { ThemeProvider } from 'styled-components'
import vars from './styles/vars'
import ResetStyles from './styles/reset'
import BaseStyles from './styles/base'

// Pages
import PageCategories from './pages/PageCategories'
import PageLessons from './pages/PageLessons'

function App () {
  return (
    <ThemeProvider theme={vars}>
      <Router>
        <>
          <ResetStyles/>
          <BaseStyles/>

          <Route exact path={routesConfig.categories()} component={PageCategories} />
          <Route path={routesConfig.lessons()} component={PageLessons} />
        </>
      </Router>
    </ThemeProvider>
  )
}

export default App

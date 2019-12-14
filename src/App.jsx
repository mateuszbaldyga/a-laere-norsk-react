import React, {useState, useContext} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Routes configuration
import routesConfig from 'routes.config'

// Styles
import { ThemeProvider } from 'styled-components'
import vars from 'styles/vars'
import ResetStyles from 'styles/reset'
import BaseStyles from 'styles/base'

// Pages
import PageCategories from 'pages/PageCategories'
import PageLessons from 'pages/PageLessons'

// Components
import ModalContainer from 'components/modals/ModalContainer'

import { ModalContext } from 'context'

function App () {
  const context = useContext(ModalContext)
  return (
    <ThemeProvider theme={vars}>
      <ModalContext.Provider value={context}>
        <Router>
          <>
            <ResetStyles/>
            <BaseStyles/>

            <Route exact path={routesConfig.categories()} component={PageCategories} />
            <Route path={routesConfig.lessons()} component={PageLessons} />

            <ModalContainer/>
          </>
        </Router>
      </ModalContext.Provider>
    </ThemeProvider>
  )
}

export default App

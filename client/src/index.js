/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import './index.css'
import App from './main/App'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter >
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>, document.getElementById('root'))
registerServiceWorker()

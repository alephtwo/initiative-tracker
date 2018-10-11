import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Grid from '@material-ui/core/Grid'

import './index.css'

import reducer from './reducers/reducer'
import InitiativeTracker from './components/InitiativeTracker'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { pink, blueGrey } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: pink
  }
})

const app = (
  <Provider store={createStore(reducer)}>
    <MuiThemeProvider theme={theme}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid sm={12} md={10} lg={8}>
          <InitiativeTracker />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))

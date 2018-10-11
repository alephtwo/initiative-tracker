import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Grid from '@material-ui/core/Grid'

import reducer from './reducers/reducer'
import InitiativeTracker from './components/InitiativeTracker'

const app = (
  <Provider store={createStore(reducer)}>
    <Grid container direction='row' justify='center' alignItems='center'>
      <Grid sm={12} md={10} lg={8}>
        <InitiativeTracker />
      </Grid>
    </Grid>
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))

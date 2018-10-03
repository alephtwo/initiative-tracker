import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import InitiativeTracker from './components/InitiativeTracker';

const app = (
  <Provider store={createStore(reducer)}>
    <InitiativeTracker />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))

import { Action, Reducer } from 'redux'
import { List, Map } from 'immutable'
import { AppState } from '../interfaces/AppState'
import { Initiative } from '../interfaces/Initiative'
import * as uuidv4 from 'uuid/v4'

// TODO: Dynamically generate placeholder names from a list

const initialState: AppState = Map({
  initiatives: List<Initiative>([{
    id: uuidv4(),
    name: 'Placeholder McGee',
    value: 0,
    health: 0
  }])
})

export default (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_BLOCK':
      return state.updateIn(['initiatives'], list => list.push({
        id: uuidv4(),
        name: 'Sir Bearington',
        value: 0,
        health: 0
      }))
  }
  return state
}

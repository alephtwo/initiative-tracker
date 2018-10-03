import { Action, Reducer } from 'redux'
import { List, Map } from 'immutable'
import { AppState } from '../interfaces/AppState'
import { Initiative } from '../interfaces/Initiative'

const initialState: AppState = {
  initiatives: List<Initiative>([
    { name: 'Placeholder McGee', value: 0 }
  ])
}

export default (state = initialState, action: Action): AppState => {
  return state
}

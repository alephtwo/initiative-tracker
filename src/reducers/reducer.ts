import { Action } from 'redux'
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

interface UpdateInitiativeAction extends Action {
  id: string,
  extensions: object
}

export default (state = initialState, action: UpdateInitiativeAction): AppState => {
  switch (action.type) {
    case 'ADD_BLOCK':
      return addBlock(state)
    case 'SORT_BY_INITIATIVE':
      return sortByInitiative(state)
  }
  return state
}

const addBlock = (state: AppState): AppState =>
  state.updateIn(['initiatives'], (list: List<Initiative>) => list.push({
    id: uuidv4(),
    name: 'Sir Bearington',
    value: 0,
    health: 0
  }))

const sortByInitiative = (state: AppState): AppState =>
  state.updateIn(['initiatives'], (list: List<Initiative>) =>
    list.sortBy((a: Initiative) => -a.value))

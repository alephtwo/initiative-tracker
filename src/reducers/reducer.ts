import { Action } from 'redux'
import { List, Map } from 'immutable'
import { AppState } from '../interfaces/AppState'
import { Initiative } from '../interfaces/Initiative'
import * as uuidv4 from 'uuid/v4'
import randomName from '../util/randomName'

// TODO: Dynamically generate placeholder names from a list

const initialState: AppState = Map({
  initiatives: List<Initiative>([{
    id: uuidv4(),
    name: randomName(),
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
    case 'UPDATE_INITIATIVE':
      return updateInitiative(state, action)
    case 'DELETE_INITIATIVE':
      return deleteInitiative(state, action.id)
    case 'SORT_BY_INITIATIVE':
      return sortByInitiative(state)
  }
  return state
}

const addBlock = (state: AppState): AppState =>
  state.update('initiatives', (list: List<Initiative>) => list.push({
    id: uuidv4(),
    name: randomName(),
    value: 0,
    health: 0
  }))

const updateInitiative = (state: AppState, action: UpdateInitiativeAction): AppState => {
  return state.update('initiatives', (list: List<Initiative>) => {
    const index = list.findIndex((i: Initiative) => i.id === action.id)
    return list.update(index, (i: Initiative) => Object.assign({}, i, action.extensions))
  })
}

const deleteInitiative = (state: AppState, id: string): AppState => {
  return state.update('initiatives', (list: List<Initiative>) => {
    const index = list.findIndex((i: Initiative) => i.id === id)
    return list.remove(index)
  })
}

const sortByInitiative = (state: AppState): AppState =>
  state.update('initiatives', (list: List<Initiative>) =>
    list.sortBy((a: Initiative) => -a.value))

import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { AppState } from '../interfaces/AppState'
import { List } from 'immutable'
import InitiativeBlock from './InitiativeBlock'
import { Initiative } from '../interfaces/Initiative'
import { Dispatch } from 'redux'

interface Props extends DispatchProp {
  initiatives: List<Initiative>
}

const InitiativeTracker = (props: Props) => (
  <div className='container'>
    <a href='#' onClick={() => props.dispatch({ type: 'ADD_BLOCK' })}>
      Add
    </a>
    {generateBlocks(props.dispatch, props.initiatives)}
  </div>
)

const generateBlocks = (dispatch: Dispatch, initiatives: List<Initiative>) =>
  initiatives.map((i: Initiative) => generateBlock(dispatch, i)).toJS()

const generateBlock = (dispatch: Dispatch, initiative: Initiative) => {
  const announceValue = (extensions: Object) => dispatch({
    type: 'UPDATE_INITIATIVE',
    id: initiative.id,
    extensions
  })

  return (
    <InitiativeBlock
      key={initiative.id}
      announceValue={announceValue}
      initiative={initiative} />
  )
}

const mapStateToProps = (state: AppState) =>
  ({ initiatives: state.get('initiatives') })

export default connect(mapStateToProps)(InitiativeTracker)

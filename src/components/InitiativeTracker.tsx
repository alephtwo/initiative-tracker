import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { AppState } from '../interfaces/AppState'
import { List } from 'immutable'
import InitiativeBlock from './InitiativeBlock'
import { Initiative } from '../interfaces/Initiative'

interface Props extends DispatchProp {
  initiatives: List<Initiative>
}

const InitiativeTracker = (props: Props) => (
  <div className='container'>
    <a href='#' onClick={() => props.dispatch({ type: 'ADD_BLOCK' })}>
      Add
    </a>
    {generateBlocks(props.initiatives)}
  </div>
)

const generateBlocks = (initiatives: List<Initiative>) =>
  initiatives.map(generateBlock).toJS()

const generateBlock = (initiative: Initiative, key: number) =>
  <InitiativeBlock key={key} initiative={initiative} />

const mapStateToProps = (state: AppState) =>
  ({ initiatives: state.get('initiatives') })

export default connect(mapStateToProps)(InitiativeTracker)

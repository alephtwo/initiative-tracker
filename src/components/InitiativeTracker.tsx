import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../interfaces/AppState'
import { List } from 'immutable'
import InitiativeBlock from './InitiativeBlock'
import { Initiative } from '../interfaces/Initiative'

interface Props {
  initiatives: List<Initiative>
}

const InitiativeTracker = (props: Props) => (
  <div className='container'>
    <div className='card-deck'>
      {generateBlocks(props.initiatives)}
    </div>
  </div>
)

const generateBlocks = (initiatives: List<Initiative>) =>
  initiatives.map(generateBlock).toJS()

const generateBlock = (initiative: Initiative, key: number) =>
  <InitiativeBlock key={key} initiative={initiative} />

const mapStateToProps = (state: AppState) =>
  ({ initiatives: state.initiatives })

export default connect(mapStateToProps)(InitiativeTracker)

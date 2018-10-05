import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { AppState } from '../interfaces/AppState'
import { List } from 'immutable'
import InitiativeBlock from './InitiativeBlock'
import { Initiative } from '../interfaces/Initiative'
import { Dispatch } from 'redux'
import { Paper, Grid, Theme, withStyles } from '@material-ui/core'

interface Props extends DispatchProp {
  initiatives: List<Initiative>
}

const InitiativeTracker = (props: Props) => (
  <Grid container spacing={8}>
    <Grid item xs={12}>
      <Paper>
        <a href='#' onClick={() => props.dispatch({ type: 'ADD_BLOCK' })}>
          Add
        </a>

        <a href='#' onClick={() => props.dispatch({ type: 'SORT_BY_INITIATIVE' })}>
          Sort
        </a>
      </Paper>
    </Grid>
    {generateBlocks(props.dispatch, props.initiatives)}
  </Grid>
)

const generateBlocks = (dispatch: Dispatch, initiatives: List<Initiative>) =>
  initiatives.map((i: Initiative) => generateBlock(dispatch, i)).toJS()

const generateBlock = (dispatch: Dispatch, initiative: Initiative) => {
  const announce = (extensions: Object) => dispatch({
    type: 'UPDATE_INITIATIVE',
    id: initiative.id,
    extensions
  })

  return (
    <InitiativeBlock
      key={initiative.id}
      announce={announce}
      initiative={initiative} />
  )
}

const mapStateToProps = (state: AppState) =>
  ({ initiatives: state.get('initiatives') })

export default connect(mapStateToProps)(InitiativeTracker)

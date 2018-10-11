import { List } from 'immutable'
import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Grid } from '@material-ui/core'
import Controls from './Controls'
import { AppState } from '../interfaces/AppState'
import { Initiative } from '../interfaces/Initiative'
import InitiativeBlocks from './InitiativeBlocks'

interface Props extends DispatchProp {
  initiatives: List<Initiative>
}

const InitiativeTracker = (props: Props) => {
  const { initiatives, dispatch } = props

  return (
    <Grid container>
      <Grid container item>
        <Controls dispatch={dispatch} />
      </Grid>
      <Grid container item>
        <InitiativeBlocks dispatch={dispatch} initiatives={initiatives} />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state: AppState) =>
  ({ initiatives: state.get('initiatives') })

export default connect(mapStateToProps)(InitiativeTracker)

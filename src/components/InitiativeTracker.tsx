import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { AppState } from '../interfaces/AppState'
import { List } from 'immutable'
import InitiativeBlock from './InitiativeBlock'
import { Initiative } from '../interfaces/Initiative'
import { Dispatch } from 'redux'
import { Paper, Grid, Theme, withStyles, Button, StyledComponentProps } from '@material-ui/core'

interface Props extends DispatchProp, StyledComponentProps {
  initiatives: List<Initiative>
}

const InitiativeTracker = (props: Props) => {
  const { classes = {} } = props

  return (
    <div style={{ textAlign: 'center' }}>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Paper>
            <Button
              className={classes.button}
              color='primary'
              variant='contained'
              onClick={() => props.dispatch({ type: 'ADD_BLOCK' })}>
                Add
            </Button>
            <Button
              className={classes.button}
              color='secondary'
              variant='contained'
              onClick={() => props.dispatch({ type: 'SORT_BY_INITIATIVE' })}>
                Sort
            </Button>
          </Paper>
        </Grid>
      </Grid>
      {generateBlocks(props.dispatch, props.initiatives)}
    </div>
  )
}

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

const styles = (theme: any) => ({
  button: {
    margin: theme.spacing.unit
  }
})

const mapStateToProps = (state: AppState) =>
  ({ initiatives: state.get('initiatives') })

const StyledInitiativeTracker = withStyles(styles)(InitiativeTracker)
export default connect(mapStateToProps)(StyledInitiativeTracker)

import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { AppState } from '../interfaces/AppState'
import { List } from 'immutable'
import InitiativeBlock from './InitiativeBlock'
import { Initiative } from '../interfaces/Initiative'
import { Dispatch } from 'redux'
import { withStyles, StyledComponentProps, Theme } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import SortIcon from '@material-ui/icons/Sort'

interface Props extends DispatchProp, StyledComponentProps {
  initiatives: List<Initiative>
}

const InitiativeTracker = (props: Props) => {
  const { classes = {}, initiatives, dispatch } = props

  return (
    <div>
      <h1 className={classes.header}>initiative Tracker</h1>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            color='secondary'
            variant='contained'
            onClick={() => props.dispatch({ type: 'SORT_BY_INITIATIVE' })}>
              <SortIcon className={classes.leftIcon} />Sort
          </Button>
        </Grid>
      </Grid>
      {generateBlocks(dispatch, initiatives)}
      <Grid container spacing={32}>
        <Grid item xs={12}>
          <Button
            color='primary'
            variant='fab'
            onClick={() => props.dispatch({ type: 'ADD_BLOCK' })}>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

const generateBlocks = (dispatch: Dispatch, initiatives: List<Initiative>) => {
  return initiatives.map((i: Initiative) => generateBlock(dispatch, i)).toJS()
}

const generateBlock =
  (dispatch: Dispatch, initiative: Initiative) => {
    const announce = (extensions: Object) => dispatch({
      type: 'UPDATE_INITIATIVE',
      id: initiative.id,
      extensions
    })

    return (
      <InitiativeBlock
        key={initiative.id}
        announce={announce}
        dispatch={dispatch}
        initiative={initiative} />
    )
  }

const styles = (theme: any) => ({
  header: {
    fontFamily: theme.typography.fontFamily
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
})

const mapStateToProps = (state: AppState) =>
  ({ initiatives: state.get('initiatives') })

const StyledInitiativeTracker = withStyles(styles)(InitiativeTracker)
export default connect(mapStateToProps)(StyledInitiativeTracker)

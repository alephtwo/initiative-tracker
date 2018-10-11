import * as React from 'react'
import { DispatchProp } from 'react-redux'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import SortIcon from '@material-ui/icons/Sort'
import { withStyles, StyledComponentProps, Theme } from '@material-ui/core'

interface Props extends DispatchProp, StyledComponentProps {

}

const Controls = (props: Props) => {
  const { classes = {} } = props
  return (
    <div>
      <Button
        color='primary'
        variant='contained'
        onClick={() => props.dispatch({ type: 'ADD_BLOCK' })}>
        <AddIcon className={classes.leftIcon} />Add
      </Button>
      <Button
        className={classes.button}
        color='secondary'
        variant='contained'
        onClick={() => props.dispatch({ type: 'SORT_BY_INITIATIVE' })}>
        <SortIcon className={classes.leftIcon} />Sort
      </Button>
    </div>
  )
}

const styles = (theme: Theme) => ({
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
})

export default withStyles(styles)(Controls)

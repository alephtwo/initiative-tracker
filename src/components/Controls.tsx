import * as React from 'react'
import { DispatchProp } from 'react-redux'
import {
  Button,
  createStyles,
  StyledComponentProps,
  Theme,
  withStyles
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SortIcon from '@material-ui/icons/Sort'

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

const styles = (theme: Theme) => createStyles({
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
})

export default withStyles(styles)(Controls)

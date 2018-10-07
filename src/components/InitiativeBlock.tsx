import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { withStyles, StyledComponentProps, Button } from '@material-ui/core'
import { Dispatch } from 'redux'

interface Props extends StyledComponentProps {
  announce: Function,
  dispatch: Dispatch,
  initiative: Initiative,
  enableDelete: boolean
}

const InitiativeBlock = (props: Props) => {
  const { classes = {}, announce, enableDelete, dispatch } = props
  const { id, value, name, health } = props.initiative

  const generateAnnounce = (attribute: string, transform = (a: any) => a) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      announce({ [attribute]: transform(event.target.value) })
    }
  }

  const toNumber = (input: string) => {
    const numbers = input.replace(/\D/g, '')
    if (!numbers) {
      return ''
    }

    return parseInt(numbers, 10)
  }

  const DeleteButton = () => {
    return (
      <Button
        onClick={() => dispatch({ type: 'DELETE_INITIATIVE', id })}
        disabled={!enableDelete}
        color='primary'>
        Delete
      </Button>
    )
  }

  return (
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <TextField
            onChange={generateAnnounce('name')}
            className={classes.textField}
            label='Name'
            value={name} />
          <TextField
            className={classes.textField}
            onChange={generateAnnounce('value', toNumber)}
            label='Initiative'
            value={value} />
          <TextField
            className={classes.textField}
            onChange={generateAnnounce('health', toNumber)}
            label='Health'
            value={health} />
          <DeleteButton />
        </Paper>
      </Grid>
    </Grid>
  )
}

// TODO: Fix types...
const styles = (theme: any): any => ({
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

export default withStyles(styles)(InitiativeBlock)

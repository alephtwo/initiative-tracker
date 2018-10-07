import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles, StyledComponentProps } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Dispatch } from 'redux'
const { min, abs } = Math

interface Props extends StyledComponentProps {
  announce: Function,
  dispatch: Dispatch,
  initiative: Initiative
}

const InitiativeBlock = (props: Props) => {
  const { classes = {}, announce, dispatch } = props
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

  return (
    <Grid container spacing={32}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <TextField
            onChange={generateAnnounce('name')}
            className={classes.textField}
            label='Name'
            value={name} />
          <TextField
            className={classes.textField}
            onChange={generateAnnounce('value', toNumber)}
            onBlur={generateAnnounce('value', () => min(abs(value) || 0, 40))}
            label='Initiative'
            value={value} />
          <TextField
            className={classes.textField}
            onChange={generateAnnounce('health', toNumber)}
            onBlur={generateAnnounce('health', () => min(abs(health) || 0, 1500))}
            label='Health'
            value={health} />
          <Button
            onClick={() => dispatch({ type: 'DELETE_INITIATIVE', id })}
            variant='fab'
            color='default'>
            <DeleteIcon />
          </Button>
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

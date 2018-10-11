import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles, StyledComponentProps, Theme } from '@material-ui/core'
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
      <Grid item>
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
          variant='contained'
          size='small'
          color='default'>
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

const styles = (theme: Theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
})

export default withStyles(styles)(InitiativeBlock)

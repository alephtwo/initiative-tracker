import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles, StyledComponentProps, Theme } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Paper from '@material-ui/core/Paper'
import { Dispatch } from 'redux'
import Typography from '@material-ui/core/Typography'
const { min, abs } = Math

interface Props extends StyledComponentProps {
  announce: Function,
  dispatch: Dispatch,
  initiative: Initiative,
  order: number
}

const InitiativeBlock = (props: Props) => {
  const { classes = {}, announce, dispatch, order } = props
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
    <Paper className={classes.paper}>
      <Grid container spacing={16} direction='row' alignItems='center'>
        <Grid item>
          <Typography variant='title' className={classes.order} align='center'>
            {order}
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            onChange={generateAnnounce('name')}
            className={classes.textField}
            label='Name'
            value={name} />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textField}
            onChange={generateAnnounce('value', toNumber)}
            onBlur={generateAnnounce('value', () => min(abs(value) || 0, 40))}
            label='Initiative'
            value={value} />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textField}
            onChange={generateAnnounce('health', toNumber)}
            onBlur={generateAnnounce('health', () => min(abs(health) || 0, 1500))}
            label='Health'
            value={health} />
        </Grid>
        <Grid item>
          <Button
            onClick={() => dispatch({ type: 'DELETE_INITIATIVE', id })}
            variant='contained'
            size='small'
            color='secondary'>
            <DeleteIcon />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

const styles = (theme: Theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  order: {
    margin: theme.spacing.unit,
    width: 3 * theme.spacing.unit
  }
})

export default withStyles(styles)(InitiativeBlock)

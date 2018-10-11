import * as React from 'react'
import { Dispatch } from 'redux'
import {
  Button,
  Checkbox,
  createStyles,
  FormControlLabel,
  Grid,
  Paper,
  StyledComponentProps,
  TextField,
  Theme,
  Typography,
  withStyles
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Initiative } from '../interfaces/Initiative'

const { min, abs } = Math

interface Props extends StyledComponentProps {
  announce: Function,
  dispatch: Dispatch,
  initiative: Initiative,
  order: number
}

const InitiativeBlock = (props: Props) => {
  const { classes = {}, announce, dispatch, order } = props
  const {
    id,
    value,
    name,
    health,
    placeholder,
    holdingAction
  } = props.initiative

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

  const HoldAction = () => (
    <Checkbox
      onChange={generateAnnounce('holdingAction', () => !holdingAction)}
      checked={holdingAction} />
  )

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
            placeholder={placeholder}
            variant='outlined'
            value={name} />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textField}
            onChange={generateAnnounce('value', toNumber)}
            onBlur={generateAnnounce('value', () => min(abs(value) || 0, 40))}
            label='Initiative'
            variant='outlined'
            value={value} />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textField}
            onChange={generateAnnounce('health', toNumber)}
            onBlur={generateAnnounce('health', () => min(abs(health) || 0, 1500))}
            label='Health'
            variant='outlined'
            value={health} />
        </Grid>
        <Grid item>
          <FormControlLabel control={<HoldAction />} label='Hold' />
        </Grid>
        <Grid item>
          <Button
            onClick={() => dispatch({ type: 'DELETE_INITIATIVE', id })}
            size='small'>
            <DeleteIcon />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

const styles = (theme: Theme) => createStyles({
  textField: {
    margin: theme.spacing.unit
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

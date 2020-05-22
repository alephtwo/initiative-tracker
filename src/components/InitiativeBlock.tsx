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
    return (event: any) => {
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

  const deleteButtonProps = health === 0 ? {} : {
    color: 'primary',
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={1} direction='row' alignItems='center'>
        <Grid item>
        <Typography variant='h6' className={classes.order} align='center'>
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
            className={classes.numberField}
            error={value.toString().length > 2}
            onChange={generateAnnounce('value', toNumber)}
            onBlur={generateAnnounce('value', () => min(abs(value) || 0, 99))}
            label='Initiative'
            variant='outlined'
            value={value} />
        </Grid>
        <Grid item>
          <TextField
            className={classes.numberField}
            error={health.toString().length > 4}
            onChange={generateAnnounce('health', toNumber)}
            onBlur={generateAnnounce('health', () => min(abs(health) || 0, 9999))}
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
            color={health === 0 ? 'secondary' : 'default'}
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
    margin: theme.spacing(1)
  },
  numberField: {
    margin: theme.spacing(1),
    width: '100px'
  },
  paper: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  order: {
    margin: theme.spacing(1),
    width: 3 * theme.spacing(1)
  }
})

export default withStyles(styles)(InitiativeBlock)

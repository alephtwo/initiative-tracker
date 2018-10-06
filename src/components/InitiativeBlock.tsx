import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import { isUndefined } from 'util'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { withStyles, Theme, StyledComponentProps } from '@material-ui/core'

interface Props extends StyledComponentProps {
  announce: Function,
  initiative: Initiative,
}

const InitiativeBlock = (props: Props) => {
  const { classes = {}, announce } = props
  const { value, name, health } = props.initiative

  const generateAnnounce = (attribute: string, transform = (a: any) => a) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      announce({ [attribute]: transform(event.target.value) })
    }
  }

  const toNumber = (a: string) => {
    if (!a) {
      return ''
    }

    return Number(a)
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
            type='number'
            label='Initiative'
            value={value} />
          <TextField
            className={classes.textField}
            onChange={generateAnnounce('health', toNumber)}
            type='number'
            label='Health'
            value={health} />
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

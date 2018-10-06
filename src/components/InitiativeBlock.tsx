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
  const { classes = {} } = props
  const { value, name, health } = props.initiative

  return (
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <TextField
            className={classes.textField}
            label='Name'
            value={name} />
          <TextField
            className={classes.textField}
            label='Initiative'
            value={value} />
          <TextField
            className={classes.textField}
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

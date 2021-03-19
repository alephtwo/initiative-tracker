import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './components/Application';

const theme = createMuiTheme({
  palette: {
    primary: Colors.blueGrey,
    secondary: Colors.red,
  },
});

const app = (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Application />
  </MuiThemeProvider>
);
const mount = document.getElementById('app');

ReactDOM.render(app, mount);

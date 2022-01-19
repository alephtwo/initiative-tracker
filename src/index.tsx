import { CssBaseline, colors as Colors, createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './components/Application';

const theme = createTheme({
  palette: {
    primary: Colors.blueGrey,
    secondary: Colors.red,
  },
});

const app = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Application />
  </ThemeProvider>
);
const mount = document.getElementById('app');

ReactDOM.render(app, mount);

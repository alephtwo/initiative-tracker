import { CssBaseline, colors as Colors, createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { createRoot } from "react-dom/client";
import Application from "./components/Application";

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

const root = createRoot(document.getElementById("app") as HTMLDivElement);
root.render(app);

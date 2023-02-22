import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Sidebar from "./Sidebar";

function appBarLabel(label) {
  return (
    <Toolbar>
      <Sidebar />
      <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary">
        {appBarLabel("Youtube Scheduler")}
      </AppBar>
    </ThemeProvider>
  );
}

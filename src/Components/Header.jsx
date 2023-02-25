import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Sidebar from "./Sidebar";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#333132",
    },
    secondary: {
      main: "#0067C0",
    },
    text: {
      primary: "#ffffff", // アイコンやテキストの色を変更したい場合に指定する
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#333132",
        },
      },
    },
  },
});

function appBarLabel(label) {
  return (
    <Toolbar>
      <Sidebar />
      <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

export default function EnableColorOnDarkAppBar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" color="primary">
        {appBarLabel("Youtube Scheduler")}
      </AppBar>
    </ThemeProvider>
  );
}

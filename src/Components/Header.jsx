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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "white", // ラベルの色を変更する
          },
          "& .MuiInputBase-input": {
            color: "white", // 入力文字列の色を変更する
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // アウトラインの色を変更する
            },
            "&:hover fieldset": {
              borderColor: "yellow", // ホバー時のアウトラインの色を変更する
            },
          },
          backgroundColor: "#333132", // 背景色を変更する
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&::before": {
            borderBottomColor: "gray", // アクティブ時の下線の色を変更する
          },
          "&::after": {
            borderBottomColor: "white", // アクティブでないときの下線の色を変更する
          },
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

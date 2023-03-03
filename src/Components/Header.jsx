import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SyncIcon from "@mui/icons-material/Sync";
import Sidebar from "./Header_Components/Sidebar";
import Popup from "./Header_Components/Popup";
import Reload from "./API_CALL/Reload";
import { IconButton } from "@mui/material";

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
              borderColor: "gray", // ホバー時のアウトラインの色を変更する
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

export default function EnableColorOnDarkAppBar({ videos, setVideos }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Sidebar videos={videos} setVideos={setVideos} />
          <Typography
            variant="h5"
            ml={3}
            noWrap
            component="div"
            sx={{ flexGrow: 4 }}
          >
            Youtube Scheduler
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => {
              Reload(videos, setVideos);
            }}
          >
            <SyncIcon />
          </IconButton>
          <Popup videos={videos} setVideos={setVideos} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

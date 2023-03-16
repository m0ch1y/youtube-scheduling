import "./App.css";
import "./Components/Header_Components/Sidebar";
import Header from "./Components/Header";
import Content from "./Components/Content";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { Theme } from "@mui/material/styles";
import React from "react";

const theme: Theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "*::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
    },
  },
});

function App(): JSX.Element {
  const data = localStorage.getItem("videos")
    ? JSON.parse(localStorage.getItem("videos") as string)
    : [];
  const [videos, setVideos] = useState(data);
  useEffect(() => {
    const json = JSON.stringify(videos);
    localStorage.setItem("videos", json);
  }, [videos]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header videos={videos} setVideos={setVideos} />
        <div className="indent">
          <Content videos={videos} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

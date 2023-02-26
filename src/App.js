import "./App.css";
import Header from "./Components/Header";
import Api from "./Components/Api";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <body>
          <Api />
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;

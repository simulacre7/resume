import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const cvTheme = createTheme({
  typography: {
    fontFamily: ["Spoqa Han Sans", "Sans-serif"].join(","),
    h1: { fontWeight: "bold" },
    h2: { fontWeight: "bold" },
    h3: { fontWeight: "bold" },
    h4: { fontWeight: "bold" },
    h5: { fontWeight: "bold" },
  },
});

ReactDOM.render(
  <ThemeProvider theme={cvTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

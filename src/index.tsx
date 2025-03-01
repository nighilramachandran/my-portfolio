import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { PrivateRoutes } from "./Routes";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import darkThemeOptions from "./styles/theme/DarkTheme";
import MotionLazyContainer from "./component/animate/MotionLazyContainer";
import "./index.css";

const darkTheme = createTheme(darkThemeOptions);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <MotionLazyContainer>
        <PrivateRoutes />
      </MotionLazyContainer>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

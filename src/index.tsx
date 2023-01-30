import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import App from "./App";
import React from "react";

const GlobalStyle = createGlobalStyle`
  body {
    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

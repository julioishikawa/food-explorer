import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./hooks/auth";
import { OrdersProvider } from "./hooks/orders";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider>
        <Routes />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

function Provider({ children }) {
  return (
    <AuthProvider>
      <OrdersProvider>{children}</OrdersProvider>
    </AuthProvider>
  );
}

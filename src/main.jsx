// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "@mui/material";

import App from "./App.jsx";

import "./styles/index.css";
import "./styles/fonts.css";
import theme from "./mui/theme.js";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_APP_GRAPHCMS_URI,
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
  // </StrictMode>
);

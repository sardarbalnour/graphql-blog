// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://eu-west-2.cdn.hygraph.com/content/cms328qt502m207w7v9tezt9k/master",
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  // </StrictMode>
);

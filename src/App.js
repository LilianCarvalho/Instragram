import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./containers/Feed";
import Error from "./containers/Error";
import Header from "./components/smarts/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

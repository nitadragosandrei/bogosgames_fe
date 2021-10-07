import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Games from "./components/Games";
import Presedintii from "./components/Presedintii";
import NumberOfPlayers from "./components/NumberOfPlayers";
export default function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Games />
        </Route>
        <Route exact path="/remi">
          <h1>Rummy joaca numa oamenii cu pula ok</h1>
        </Route>
        <Route exact path="/presedintii">
          <Presedintii />
        </Route>
      </Switch>
    </Router>
  );
}

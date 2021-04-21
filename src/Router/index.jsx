import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainApp from "../Main";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <MainApp />{" "}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

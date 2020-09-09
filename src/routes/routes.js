import React from "react";
import { Switch, Route } from "react-router-dom";

import { Profile, Search, Shelves, Timeline, Login, Register } from "../pages";

export function RoutesAuth() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

export function RoutesIn() {
  return (
    <Switch>
      <Route exact path="/" component={Timeline} />
      <Route path="/profile" component={Profile} />
      <Route path="/search" component={Search} />
      <Route path="/shelves" component={Shelves} />
    </Switch>
  );
}

import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  Home,
  Login,
  Profile,
  Register,
  Search,
  Shelves,
  Timeline,
} from "../pages";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/register" component={Register} />
      <Route path="/search" component={Search} />
      <Route path="/shelves" component={Shelves} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

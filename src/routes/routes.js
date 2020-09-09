import React from "react";
import { Switch, Route } from "react-router-dom";

import { Profile, Search, Shelves, Timeline, Login, Register } from "../pages";
import { useSelector } from "react-redux";

export default function Routes() {
  const token = useSelector((state) => state.session.token);

  switch (token ? true : false) {
    case true:
      return (
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/shelves" component={Shelves} />
          <Route exact path="/" component={Timeline} />
        </Switch>
      );

    case false:
      return (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      );

    default:
      return <div>...</div>;
  }
}

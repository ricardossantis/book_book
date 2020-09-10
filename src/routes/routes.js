import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Profile, Search, Shelves, Timeline, Login, Register } from "../pages";
import { useSelector } from "react-redux";
import api from "../services/api";

const Routes = () => {
  const token = useSelector((state) => state.session.token);
  const [authorized, setAuhorized] = useState(false);

  useEffect(() => {
    if (token === "") {
      setAuhorized(false);
    }

    api
      .get("users", { headers: { Authorization: token } })
      .then(() => {
        setAuhorized(true);
      })
      .catch(() => {
        setAuhorized(false);
      });
  }, [token]);

  switch (authorized) {
    case true:
      return (
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/shelves" component={Shelves} />
          <Route path="/timeline" component={Timeline} />
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
      return <div>Loading...</div>;
  }
};

export default Routes;

import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Profile, Search, Explorer } from "../pages/exports.js";
import { useSelector } from "react-redux";
import api from "../services/api";

const Routes = () => {
  const token = useSelector((state) => state.session.token);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!token) {
      setAuthorized(false);
    } else {
      api.get("/users", { headers: { Authorization: token } })
        .then(() => setAuthorized(true))
        .catch(() => setAuthorized(false));
    }
  }, [token]);

  switch (authorized) {
    case true:
      return (
        <Switch>
          <Route path="/pesquisa">
            <Search />
          </Route>
          <Route path="/perfil/:id">
            <Profile />
          </Route>
          <Route path="/explorar">
            <Explorer />
          </Route>
        </Switch>
      );

    case false:
      return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      );

    default:
      return <div>Loading...</div>;
  }
};

export default Routes;

import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Profile,
  Search,
  Explorer,
  Login,
  Register,
} from "../pages/exports.js";
import { useSelector } from "react-redux";
import api from "../services/api";

const Routes = () => {
  const token = useSelector((state) => state.session.token);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!token) {
      setAuthorized(false);
    } else {
      api
        .get("/users", { headers: { Authorization: token } })
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
          <Route path="/explorer">
            <Explorer />
          </Route>
        </Switch>
      );

    case false:
      return (
        <Switch>
          <Route path="/logar">
            <Login />
          </Route>
          <Route path="/cadastro">
            <Register />
          </Route>
        </Switch>
      );

    default:
      return <div>Loading...</div>;
  }
};

export default Routes;

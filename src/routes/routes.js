import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Profile, Search, Timeline, Login, Register } from "../pages/exports.js";
import { useSelector } from "react-redux";
import api from "../services/api";

const Routes = () => {
  const token = useSelector((state) => state.session.token);
  const [authorized, setAuhorized] = useState(false);

  useEffect(() => {
    !token
      ? setAuhorized(false)
      : api
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
          <Route path="/pesquisa">
            <Search />
          </Route>
          <Route path="/perfil/:id">
            <Profile />
          </Route>
          <Route path="/avaliacoes">
            <Timeline />
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

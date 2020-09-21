import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  Home,
  Profile,
  Search,
  Explorer,
  Chat,
  Join,
} from "../pages/exports.js";
import { useSelector } from "react-redux";
import api from "../services/api";
import styled from "styled-components";
import FramerLoading from "../components/framerLoading";
import { Menu } from "../components/exports.js";

const Routes = () => {
  let history = useHistory();
  const token = useSelector((state) => state.session.token);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!token) {
      setAuthorized(false);
      history.push("/");
    } else {
      api
        .get("/users", { headers: { Authorization: token } })
        .then(() => setAuthorized(true))
        .catch(() => setAuthorized(false));
    }
  }, [token, history]);

  switch (authorized) {
    case true:
      return (
        <Menu>
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
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/chat" component={Chat}></Route>
          </Switch>
        </Menu>
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
      return (
        <LoadingScreen>
          <FramerLoading />
        </LoadingScreen>
      );
  }
};

export default Routes;

const LoadingScreen = styled.div`
  width: 100vw;
  heght: 100vh;
`;

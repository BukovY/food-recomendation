import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <h1>some</h1>
        </Route>
        <Route>
          <Typography variant="h1">Страница не найдена</Typography>
          <NavLink to="/">Перейти на главную</NavLink>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;

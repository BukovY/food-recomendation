import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import SelectFood from "./Pages/SelectFood/SelectFood";
import Result from "./Pages/Result/Result";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <SelectFood />
          </Route>
          <Route path="/result" exact>
            <Result />
          </Route>
          <Route>
            <Typography variant="h1">Страница не найдена</Typography>
            <NavLink to="/">Перейти на главную</NavLink>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;

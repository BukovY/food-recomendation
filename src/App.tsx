import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import FavoritePage from "./Pages/FavoritePage/FavoritePage";
import CookPage from "./Pages/CookPage/CookPage";
import IngredientsPage from "./Pages/IngredientsPage/IngredientsPage";
import ShoppingPage from "./Pages/ShoppingPage/ShoppingPage";
import DangerPage from "./Pages/DangerPage/DangerPage";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/ingredients" exact>
            <IngredientsPage/>
          </Route>
          <Route path="/favorite" exact>
            <FavoritePage />
          </Route>
          <Route path="/cook" exact>
            <CookPage />
          </Route>
          <Route path="/shopping" exact>
            <ShoppingPage/>
          </Route>
          <Route path="/danger" exact>
            <DangerPage/>
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

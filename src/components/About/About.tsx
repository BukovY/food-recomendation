import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function About() {
  return (
    <Box>
      <Typography variant="h2" align="center">
        О программе
      </Typography>
      <Typography variant="subtitle1" align="center">
        Подбор рецептов по доступным ингредиентам
      </Typography>
      <Typography variant="h4" align="center">
        Технологии
      </Typography>
      <Typography variant="subtitle1" align="center">
        TypeScript, React (with hooks), Redux, React-Redux, Redux Toolkit, React
        Router, Material UI, localStorage
      </Typography>
      <Typography variant="h5" align="center">
        Разработчик: Быков Евгений
        <a href="https://www.linkedin.com/in/%D0%B6%D0%B5%D0%BD%D1%8F-%D0%B1%D1%8B%D0%BA%D0%BE%D0%B2-8178011b6/">
          профиль linkedIn
        </a>
      </Typography>

      <Typography variant="h4" align="left">
        Консультанты
      </Typography>
      <Typography variant="body1" align="left">
        Малахов Владимир (клинический фармоколог)
      </Typography>
      <Typography variant="body1" align="left">
        Зорина Полина
      </Typography>
      <Typography variant="h5" align="center">
        История версий
      </Typography>
      <Typography variant="h6" align="left">
        V1.0 (09-08-2021)
      </Typography>
      <Typography variant="body1" align="left">
        Релиз приложения. Доступный функционал: подбор рецептов по ингридиентам,
        исключение рецептов по ингридиентам, формирование корзины покупок,
        добавление рецептов в избранные, добавление рецептов к готовке, поиск по
        ингредиентам, возможность сбросе данных до дефолтных по категориям.
      </Typography>
    </Box>
  );
}

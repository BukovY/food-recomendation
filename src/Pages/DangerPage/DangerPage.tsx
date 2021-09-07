import React, { FC } from "react";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { restoreDefaultByKey } from "../../redux/actions/userData";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  buttons: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginBottom: "10px",
  },
  textAlign: {
    textAlign: "center",
    marginBottom: "10px",
  },
}));

const DangerPage: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const restoreByKey = (str: string) => {
    dispatch(restoreDefaultByKey(str));
  };
  return (
    <Box>
      <Typography variant="h3" className={classes.textAlign}>
        Осторожно
      </Typography>
      <Typography variant="h5" className={classes.textAlign}>
        Кнопки сбрасывают настройки вышего приложения до стандартных
      </Typography>
      <Box className={classes.buttons}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => restoreByKey("hasIngredients")}
        >
          Cбросить доступные ингридиенты
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => restoreByKey("excludingIngredients")}
        >
          Cбросить исключающие ингредиенты
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => restoreByKey("toBuy")}
        >
          Cбросить ингридиенты к покупке
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => restoreByKey("favoriteFood")}
        >
          Cбросить любимые рецепты
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => restoreByKey("toCook")}
        >
          Cбросить рецепты к готовке
        </Button>
      </Box>
    </Box>
  );
};
export default DangerPage;

import React, { FC } from "react";
import { recipeType } from "../../interfaces/interfaces";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Ingredient from "../Ingredient/Ingredient";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import { makeStyles } from "@material-ui/core/styles";
import { minToTime } from "../../utils/functions";
import CookSteps from "../CookSteps/CookSteps";
import NutritionBlock from "../NutritionBlock/NutritionBlock";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { setCook, setFavorite } from "../../redux/actions/userData";

type FoodCardType = {
  recipe: recipeType;
};
type IngredientsType = {
  available: Array<string>;
  need: Array<string>;
};

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
  },
  favoriteIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  alignText: {
    textAlign: "center",
    fontSize: "24px",
  },
  timeBox: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  box: {
    marginBottom: "10px",
    marginTop: "5px",
  },
  progress: {
    display: "grid",
    gridTemplateColumns: "1fr 50px",
    alignItems: "center",
  },
  cardIngredients: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "10px",
    "@media screen and (max-width: 1200px)": {
      gridTemplateColumns: "1fr",
    },
  },
  buttonsFooter: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "10px",
  },
  buttonToRecipe: {
    width: "100%",
  },
}));

const FoodCard: FC<FoodCardType> = ({ recipe }) => {
  const classes = useStyles();
  const { hasIngredients, favoriteFood, toCook } = useSelector(
    (state: RootState) => state.userData
  );

  let ingredient: IngredientsType = {
    available: [],
    need: [],
  };
  for (let i of recipe.ingredients) {
    if (hasIngredients.indexOf(i) === -1) {
      ingredient.need.push(i);
    } else {
      ingredient.available.push(i);
    }
  }
  const isFavorite = favoriteFood.indexOf(recipe.id) !== -1;
  const isCook = toCook.indexOf(recipe.id) !== -1;
  const dispatch = useDispatch();
  return (
    <Box className={classes.box}>
      <Card variant="outlined">
        <CardContent>
          <Box className={classes.header}>
            <FavoriteIcon
              className={classes.favoriteIcon}
              fontSize="large"
              color={isFavorite ? "secondary" : "disabled"}
              onClick={() => dispatch(setFavorite(recipe.id))}
            />
            <Typography variant="h4">{recipe.title}</Typography>
            <Box className={classes.timeBox}>
              <AccessAlarmsIcon fontSize="large" />
              <Typography variant="body1">{minToTime(recipe.time)}</Typography>
            </Box>
          </Box>
          <Box className={classes.progress}>
            <LinearProgress
              value={recipe.matchRatio * 100}
              variant="determinate"
            />
            <Typography variant="body1">{recipe.matchRatio * 100}%</Typography>
          </Box>
          <NutritionBlock block={recipe.energyValue} />
          <Box className={classes.cardIngredients}>
            <Box>
              <Typography variant="body1" className={classes.alignText}>
                ?????????? ????????????
              </Typography>
              {ingredient.need.map((el) => (
                <Ingredient ingredient={el} key={el} isNeedUpdatePagination={true}/>
              ))}
            </Box>
            <Box>
              <Typography variant="body1" className={classes.alignText}>
                ????????????????
              </Typography>
              {ingredient.available.map((el) => (
                <Ingredient ingredient={el} key={el} isNeedUpdatePagination={true}/>
              ))}
            </Box>
          </Box>
          <br />
          <CookSteps steps={recipe.steps} />
          <Box className={classes.buttonsFooter}>
            <Button
              color={isCook ? "secondary" : "primary"}
              variant="contained"
              onClick={() => dispatch(setCook(recipe.id))}
            >
              {isCook ? "???? ????????????????" : "????????????????"}
            </Button>
            <a href={recipe.link} target="_blank" rel="noreferrer">
              <Button variant="contained" className={classes.buttonToRecipe}>
                ?? ?????????????? ???? ??????????
              </Button>
            </a>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default FoodCard;

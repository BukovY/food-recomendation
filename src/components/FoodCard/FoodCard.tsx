import React, { FC } from "react";
import { recipeType } from "../../interfaces/interfaces";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Ingredient from "../Ingredient/Ingredient";

type FoodCardType = {
  recipe: recipeType;
};
type IngredientsType = {
  available: Array<string>;
  need: Array<string>;
};
const FoodCard: FC<FoodCardType> = ({ recipe }) => {
  const { hasIngredients } = useSelector((state: RootState) => state.userData);

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
  return (
    <Box marginBottom="10px" marginTop="5px">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4">{recipe.title}</Typography>
          <Box
            display="grid"
            gridTemplateColumns="1fr 50px"
            alignItems="center"
          >
            <LinearProgress
              value={recipe.matchRatio * 100}
              variant="determinate"
            />
            <Typography variant="body1">{recipe.matchRatio * 100}%</Typography>
          </Box>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="10px">
            <Box>
              <Typography variant="body1">Нужно купить</Typography>
              {ingredient.need.map((el) => (
                <Ingredient ingredient={el} key={el}/>
              ))}
            </Box>
            <Box>
              <Typography variant="body1">Доступно</Typography>
              {ingredient.available.map((el) => (
                <Ingredient ingredient={el} key={el}/>
              ))}
            </Box>
          </Box>
          <br />
          <Box display="flex" justifyContent="center">
            <a href={recipe.link} target="_blank" rel="noreferrer">
              <Button size="small" variant="contained">
                Подробнее
              </Button>
            </a>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default FoodCard;

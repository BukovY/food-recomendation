import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  changeProduct,
  setExcludingProduct,
} from "../../redux/actions/userData";

type IngredientType = {
  ingredient: string;
};
const Ingredient: FC<IngredientType> = ({ ingredient }) => {
  const { hasIngredients, excludingIngredients } = useSelector(
    (state: RootState) => state.userData
  );
  const isSelected = hasIngredients.indexOf(ingredient) === -1;
  const isExclude = excludingIngredients.indexOf(ingredient) === -1;
  const dispatch = useDispatch();

  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="body1">{ingredient}</Typography>
      <Box>
        <Button
          variant="contained"
          color={isSelected ? "primary" : "secondary"}
          onClick={() => dispatch(changeProduct(ingredient))}
        >
          {isSelected ? "✓" : "❌"}
        </Button>
        <Button
          variant="contained"
          color={isExclude ? "primary" : "secondary"}
          onClick={() => dispatch(setExcludingProduct(ingredient))}
        >
          {isExclude ? "exclude" : "include"}
        </Button>
      </Box>
    </Box>
  );
};
export default Ingredient;

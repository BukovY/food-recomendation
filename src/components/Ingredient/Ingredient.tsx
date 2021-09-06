import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../redux/store";
import {changeProduct} from "../../redux/actions/userData";

type IngredientType = {
  ingredient: string;
};
const Ingredient: FC<IngredientType> = ({ ingredient}) => {
  const { hasIngredients } = useSelector((state: RootState) => state.userData);
  const isSelected = hasIngredients.indexOf(ingredient) === -1;
  const dispatch = useDispatch()

  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="body1">{ingredient}</Typography>
      <Button
        variant="contained"
        color={isSelected ? "primary" : "secondary"}
        onClick={() => dispatch(changeProduct(ingredient))}
      >
        {isSelected ? "✓" : "❌"}
      </Button>
    </Box>
  );
};
export default Ingredient;

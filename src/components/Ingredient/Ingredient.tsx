import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type IngredientType = {
  ingredient: string;
  changeProduct: (ingredient: string) => void;
};
const Ingredient: FC<IngredientType> = ({ ingredient, changeProduct }) => {
  const { hasIngredients } = useSelector((state: RootState) => state.userData);
  const isSelected = hasIngredients.indexOf(ingredient) === -1;
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="body1">{ingredient}</Typography>
      <Button
        variant="contained"
        color={isSelected ? "primary" : "secondary"}
        onClick={() => changeProduct(ingredient)}
      >
        {isSelected ? "✓" : "❌"}
      </Button>
    </Box>
  );
};
export default Ingredient;

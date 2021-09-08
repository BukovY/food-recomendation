import React, { FC } from "react";
import { getProductList } from "../../utils/functions";
import Ingredient from "../../components/Ingredient/Ingredient";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { base } from "../../base/base.";
import IngredientList from "../../components/IngredientList/IngredientList";

const IngredientsPage: FC = () => {
  const allProduct = getProductList(base);
  return (
    <>
      {allProduct.length > 0 && <IngredientList base={allProduct} />}
      <Box display="flex" justifyContent="center">
        <NavLink to="/">
          <Button variant="contained" color="primary">
            Перейти к результатам подбора
          </Button>
        </NavLink>
      </Box>
    </>
  );
};
export default IngredientsPage;

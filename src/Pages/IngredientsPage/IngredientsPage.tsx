import React, { FC } from "react";
import { getProductList, isInSearch } from "../../utils/functions";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { base } from "../../base/base.";
import IngredientList from "../../components/IngredientList/IngredientList";
import IngredientSearch from "../../components/IngredientSearch/IngredientSearch";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const IngredientsPage: FC = () => {
  const allProduct = getProductList(base);
  const { search } = useSelector((state: RootState) => state.userData);
  const productToView = allProduct.filter((el) => isInSearch(el, search));
  return (
    <>
      <IngredientSearch />
      {productToView.length > 0 && <IngredientList base={productToView} />}
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

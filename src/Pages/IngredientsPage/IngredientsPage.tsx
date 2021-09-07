import React, { FC } from "react";
import { getProductList } from "../../utils/functions";
import Ingredient from "../../components/Ingredient/Ingredient";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { base } from "../../base/base.";

const IngredientsPage: FC = () => {
  return (
    <>
      {getProductList(base).map((el) => (
        <Ingredient key={el} ingredient={el} />
      ))}
      <Box display="flex" justifyContent="center">
        <NavLink to="/result">
          <Button variant="contained" color="primary">
            Go to result
          </Button>
        </NavLink>
      </Box>
    </>
  );
};
export default IngredientsPage;

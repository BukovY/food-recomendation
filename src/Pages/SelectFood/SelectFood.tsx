import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getProductList } from "../../utils/functions";
import Ingredient from "../../components/Ingredient/Ingredient";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const SelectFood: FC = () => {
  const { data } = useSelector((state: RootState) => state.base);

  return (
    <>
      {getProductList(data.breakfasts).map((el) => (
        <Ingredient
          key={el}
          ingredient={el}

        />
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
export default SelectFood;

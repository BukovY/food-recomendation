import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IngredientList from "../../components/IngredientList/IngredientList";
import IngredientSearch from "../../components/IngredientSearch/IngredientSearch";
import {isInSearch} from "../../utils/functions";

const useStyles = makeStyles(() => ({
  textAlign: {
    textAlign: "center",
    marginBottom: "10px",
  },
}));

const ShoppingPage: FC = () => {
  const classes = useStyles();
  const { toBuy,search } = useSelector((state: RootState) => state.userData);
  const productToView = toBuy.filter((el) => isInSearch(el, search));

  return (
    <>
      <IngredientSearch/>
      {toBuy.length !== 0 && <IngredientList base={productToView} />}
      {toBuy.length === 0 && (
        <Box>
          <Typography variant="h2" className={classes.textAlign}>
            Ингридиентов к покупке нет
          </Typography>
          <Typography variant="h3" className={classes.textAlign}>
            Смените настройки или перейдите на главную
          </Typography>
        </Box>
      )}
    </>
  );
};
export default ShoppingPage;

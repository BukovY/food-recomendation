import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  changeProduct,
  setExcludingProduct,
  setToBuy,
  setPagination,
} from "../../redux/actions/userData";
import { makeStyles } from "@material-ui/core/styles";

type IngredientType = {
  ingredient: string;
  isNeedUpdatePagination: boolean;
};

const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "5px",
    marginBottom: "10px",
    padding: "5px",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "100%",
    gridGap: "10px",
  },
}));
const Ingredient: FC<IngredientType> = ({
  ingredient,
  isNeedUpdatePagination,
}) => {
  const classes = useStyles();
  const { hasIngredients, excludingIngredients, toBuy } = useSelector(
    (state: RootState) => state.userData
  );
  const isSelected = hasIngredients.indexOf(ingredient) === -1;
  const isExclude = excludingIngredients.indexOf(ingredient) === -1;
  const isInShopList = toBuy.indexOf(ingredient) === -1;
  const dispatch = useDispatch();

  const handlerChange = () => {
    if (isNeedUpdatePagination) {
      dispatch(setPagination(1));
    }
    dispatch(changeProduct(ingredient));
  };
  const handlerExcluding = () => {
    if (isNeedUpdatePagination) {
      dispatch(setPagination(1));
    }
    dispatch(setExcludingProduct(ingredient));
  };
  const handlerBuy = () => {
    if (isNeedUpdatePagination) {
      dispatch(setPagination(1));
    }
    dispatch(setToBuy(ingredient));
  };

  return (
    <Box className={classes.box}>
      <Typography variant="body1">{ingredient}</Typography>

      <Box className={classes.buttons}>
        <Button
          variant="contained"
          color={isSelected ? "primary" : "secondary"}
          onClick={handlerChange}
        >
          {isSelected ? "✓" : "❌"}
        </Button>
        <Button
          variant="contained"
          color={isExclude ? "primary" : "secondary"}
          onClick={handlerExcluding}
        >
          {isExclude ? "Исключить" : "Включить"}
        </Button>
        {isSelected && (
          <Button
            variant="contained"
            color={isInShopList ? "primary" : "secondary"}
            onClick={handlerBuy}
          >
            {isInShopList ? "К покупкам" : "Убрать из покупок"}
          </Button>
        )}
      </Box>
    </Box>
  );
};
export default Ingredient;

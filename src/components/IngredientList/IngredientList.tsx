import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box } from "@material-ui/core";
import { PaginationList } from "../PaginationList/PaginationList";
import { setPagination } from "../../redux/actions/userData";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Ingredient from "../Ingredient/Ingredient";

type IngredientListType = {
  base: Array<string>;
};

const useStyles = makeStyles(() => ({
  textAlign: {
    textAlign: "center",
    marginBottom: "10px",
  },
}));

const IngredientList: FC<IngredientListType> = ({ base }) => {
  const classes = useStyles();
  const { paginationPage } = useSelector((state: RootState) => state.userData);
  const startSlice = (paginationPage - 1) * 10;
  const endSlice =
    paginationPage * 10 >= base.length ? base.length : paginationPage * 10;
  const ingredientToView = base.slice(startSlice, endSlice);
  const dispatch = useDispatch();
  const changePaginationPage = (num: number) => {
    dispatch(setPagination(num));
  };

  return (
    <Box>
      {ingredientToView.map((el) => (
        <Ingredient key={el} ingredient={el}  isNeedUpdatePagination={false}/>
      ))}
      {ingredientToView.length > 0 && (
        <PaginationList
          selected={paginationPage}
          max={Math.ceil(base.length / 10)}
          handler={changePaginationPage}
        />
      )}
      {ingredientToView.length === 0 && (
        <Box>
          <Typography variant="h2" className={classes.textAlign}>
            Ингредиентов для показа нет
          </Typography>
          <Typography variant="h3" className={classes.textAlign}>
            Смените настройки или перейдите в менеджер ингредиентов или измините параметры поиска
          </Typography>
        </Box>
      )}
    </Box>
  );
};
export default IngredientList;

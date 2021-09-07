import React, { FC } from "react";
import { recipeType } from "../../interfaces/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box } from "@material-ui/core";
import FoodCard from "../FoodCard/FoodCard";
import { PaginationList } from "../PaginationList/PaginationList";
import { setPagination } from "../../redux/actions/userData";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

type recipesListType = {
  base: Array<recipeType>;
};

const useStyles = makeStyles(() => ({
  textAlign: {
    textAlign: "center",
    marginBottom: "10px",
  },
}));

const RecipesList: FC<recipesListType> = ({ base }) => {
  const classes = useStyles();
  const { paginationPage } = useSelector((state: RootState) => state.userData);
  const startSlice = (paginationPage - 1) * 5;
  const endSlice =
    paginationPage * 5 >= base.length ? base.length : paginationPage * 5;
  const recipesToView = base.slice(startSlice, endSlice);
  const dispatch = useDispatch();
  const changePaginationPage = (num: number) => {
    dispatch(setPagination(num));
  };
  return (
    <Box>
      {recipesToView.map((el) => (
        <FoodCard key={el.id} recipe={el} />
      ))}
      {recipesToView.length > 0 && (
        <PaginationList
          selected={paginationPage}
          max={Math.ceil(base.length / 5)}
          handler={changePaginationPage}
        />
      )}
      {recipesToView.length === 0 && (
        <Box>
          <Typography variant="h2" className={classes.textAlign}>Рецептов для показа нет</Typography>
          <Typography variant="h3" className={classes.textAlign}>
            Смените настройки или перейдите на главную
          </Typography>
        </Box>
      )}
    </Box>
  );
};
export default RecipesList;

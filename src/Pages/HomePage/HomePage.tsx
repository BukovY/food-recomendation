import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  calculateMatchRatio,
  sortByMatchRatio,
  excludeByIngredients,
} from "../../utils/functions";
import { recipeType } from "../../interfaces/interfaces";
import { base } from "../../base/base.";
import RecipesList from "../../components/RecipesList/RecipesList";

const HomePage: FC = () => {
  const { hasIngredients, excludingIngredients } = useSelector(
    (state: RootState) => state.userData
  );
  let recipeToView: Array<recipeType> = [];
  for (let i of base) {
    recipeToView.push(calculateMatchRatio(i, hasIngredients));
  }
  if (excludingIngredients.length !== 0) {
    recipeToView = excludeByIngredients(recipeToView, excludingIngredients);
  }
  const recipeToViewSorted = sortByMatchRatio(recipeToView);

  return (
    <>
      <RecipesList base={recipeToViewSorted} />
    </>
  );
};
export default HomePage;

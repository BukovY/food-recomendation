import React, { FC } from "react";
import { base } from "../../base/base.";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RecipesList from "../../components/RecipesList/RecipesList";
import { filterRecipesByInclude } from "../../utils/functions";

const FavoritePage: FC = () => {
  const { favoriteFood, hasIngredients } = useSelector(
    (state: RootState) => state.userData
  );

  return (
    <>
      <RecipesList
        base={filterRecipesByInclude(base, favoriteFood, hasIngredients)}
      />
    </>
  );
};
export default FavoritePage;

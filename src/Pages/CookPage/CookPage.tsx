import React, { FC } from "react";
import { base } from "../../base/base.";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RecipesList from "../../components/RecipesList/RecipesList";
import { filterRecipesByInclude } from "../../utils/functions";

const CookPage: FC = () => {
  const { toCook, hasIngredients } = useSelector(
    (state: RootState) => state.userData
  );

  return (
    <>
      <RecipesList
        base={filterRecipesByInclude(base, toCook, hasIngredients)}
      />
    </>
  );
};
export default CookPage;

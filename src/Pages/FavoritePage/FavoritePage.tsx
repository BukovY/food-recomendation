import React, { FC } from "react";
import { base } from "../../base/base.";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RecipesList from "../../components/RecipesList/RecipesList";

const FavoritePage: FC = () => {
  const { favoriteFood } = useSelector((state: RootState) => state.userData);
  const recipesToView = base.filter((el) => favoriteFood.indexOf(el.id) !== -1);
  return (
    <>
      <RecipesList base={recipesToView} />
    </>
  );
};
export default FavoritePage;

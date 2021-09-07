import React, { FC } from "react";
import { base } from "../../base/base.";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RecipesList from "../../components/RecipesList/RecipesList";

const CookPage: FC = () => {
  const { toCook } = useSelector((state: RootState) => state.userData);
  const recipesToView = base.filter((el) => toCook.indexOf(el.id) !== -1);
  return (
    <>
      <RecipesList base={recipesToView} />
    </>
  );
};
export default CookPage;
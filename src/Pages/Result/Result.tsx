import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { calculateMatchRatio, sortByMatchRatio } from "../../utils/functions";
import { recipeType } from "../../interfaces/interfaces";
import FoodCard from "../../components/FoodCard/FoodCard";

const Result: FC = () => {
  // calculate ratio
  // sort bu ratio
  // pagination view
  const { data } = useSelector((state: RootState) => state.base);
  const { hasIngredients } = useSelector((state: RootState) => state.userData);
  let recipeToView: Array<recipeType> = [];
  for (let i of data.breakfasts) {
    recipeToView.push(calculateMatchRatio(i, hasIngredients));
  }
  const recipeToViewSorted = sortByMatchRatio(recipeToView);

  return (
    <>
      {recipeToViewSorted.map((el) => (
          <FoodCard  key={el.title} recipe={el}/>
      ))}
    </>
  );
};
export default Result;

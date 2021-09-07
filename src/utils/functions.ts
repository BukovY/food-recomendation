import { recipeType } from "../interfaces/interfaces";

export const getProductList = (recipes: Array<recipeType>) => {
  let arrayProduct: Array<string> = [];
  for (let i of recipes) {
    arrayProduct = [...arrayProduct, ...i.ingredients];
  }
  return Array.from(new Set(arrayProduct.map((item) => item.trim()))).sort();
};
export const calculateMatchRatio = (
  recipe: recipeType,
  hasIngredient: Array<string>
) => {
  let matchedPosition = 0;
  for (let i of recipe.ingredients) {
    if (hasIngredient.indexOf(i) !== -1) {
      matchedPosition++;
    }
  }
  const calculatedMatch = Number(
    (matchedPosition / recipe.ingredients.length).toFixed(2)
  );
  return { ...recipe, matchRatio: calculatedMatch };
};
export const sortByMatchRatio = (arrRecipe: Array<recipeType>) => {
  return arrRecipe.sort((a, b) => b.matchRatio - a.matchRatio);
};
export const changeIngredientArray = (
  arr: Array<string>,
  ingredient: string
) => {
  if (arr.indexOf(ingredient) === -1) {
    arr.push(ingredient);
  } else {
    arr = arr.filter((el) => el !== ingredient);
  }
  return arr;
};
export const excludeByIngredients = (
  arr: Array<recipeType>,
  exclude: Array<string>
) => {
  const isExclude = (recipe: recipeType, exclArr: Array<string>) => {
    for (let i of exclArr) {
      if (recipe.ingredients.indexOf(i) !== -1) {
        return false;
      }
    }
    return true;
  };
  return arr.filter((el) => isExclude(el, exclude));
};

export const minToTime = (num: number) => {
  let min: any = num % 60;
  let hour: any = (num - min) / 60;
  if (hour < 10) {
    hour = String(`0${hour}`);
  }
  if (min < 10) {
    min = String(`0${min}`);
  }
  return hour + ":" + min;
};

export const filterRecipesByInclude = (
  base: Array<recipeType>,
  arr: Array<string>,
  hasIngredients: Array<string>
) => {
  const recipesFilter = base.filter((el) => arr.indexOf(el.id) !== -1);
  let recipeToView: Array<recipeType> = [];
  for (let i of recipesFilter) {
    recipeToView.push(calculateMatchRatio(i, hasIngredients));
  }
  return recipeToView;
};

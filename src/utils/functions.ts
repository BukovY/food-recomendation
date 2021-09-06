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
  const calculatedMatch = Number((matchedPosition / recipe.ingredients.length).toFixed(2))
  return {...recipe, matchRatio:calculatedMatch}
};
export const sortByMatchRatio = (arrRecipe:Array<recipeType>) => {
    return arrRecipe.sort((a,b) =>  b.matchRatio - a.matchRatio)
}

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
export type recipeType = {
  id: string;
  title: string;
  energyValue: {
    cCal: number;
    protein: number;
    fat: number;
    carbohydrate: number;
  };
  link: string;
  ingredients: Array<string>;
  time: number;
  steps: Array<string>;
  matchRatio: number;
};

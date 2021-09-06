import { createSlice } from "@reduxjs/toolkit";
import { recipeType } from "../../interfaces/interfaces";
import { CHANGE_PRODUCT } from "../constants";

type userDataStateType = {
  hasIngredients: Array<string>;
  selectedFood: Array<recipeType>;
  favoriteFood: Array<string>;
};
const initialState: userDataStateType = {
  hasIngredients: [],
  selectedFood: [],
  favoriteFood: [],
};

const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CHANGE_PRODUCT, (state, action: any) => {
      if (state.hasIngredients.indexOf(action.payload) === -1) {
        state.hasIngredients.push(action.payload);
      } else {
        state.hasIngredients = state.hasIngredients.filter(
          (el) => el !== action.payload
        );
      }
    });
  },
});

export default userData.reducer;

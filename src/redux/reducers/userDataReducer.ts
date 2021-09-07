import { createSlice } from "@reduxjs/toolkit";
import { recipeType } from "../../interfaces/interfaces";
import {
  CHANGE_PRODUCT,
  SET_EXCLUDING_PRODUCT,
  SET_FAVORITE,
  SET_TO_BUY,
} from "../constants";
import { changeIngredientArray } from "../../utils/functions";

type userDataStateType = {
  hasIngredients: Array<string>;
  excludingIngredients: Array<string>;
  toBuy: Array<string>;
  favoriteFood: Array<string>;
};
const initialState: userDataStateType = {
  hasIngredients: [],
  excludingIngredients: [],
  toBuy: [],
  favoriteFood: [],
};

const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CHANGE_PRODUCT, (state, action: any) => {
        state.hasIngredients = changeIngredientArray(
          state.hasIngredients,
          action.payload
        );
      })
      .addCase(SET_EXCLUDING_PRODUCT, (state, action: any) => {
        state.excludingIngredients = changeIngredientArray(
          state.excludingIngredients,
          action.payload
        );
      })
      .addCase(SET_TO_BUY, (state, action: any) => {
        state.toBuy = changeIngredientArray(state.toBuy, action.payload);
      })
      .addCase(SET_FAVORITE, (state, action: any) => {
        state.favoriteFood = changeIngredientArray(
          state.favoriteFood,
          action.payload
        );
      });
  },
});

export default userData.reducer;

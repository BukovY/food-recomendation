import { createSlice } from "@reduxjs/toolkit";
import { recipeType } from "../../interfaces/interfaces";
import { CHANGE_PRODUCT, SET_EXCLUDING_PRODUCT } from "../constants";
import {changeIngredientArray} from "../../utils/functions";

type userDataStateType = {
  hasIngredients: Array<string>;
  selectedFood: Array<recipeType>;
  favoriteFood: Array<string>;
  excludingIngredients: Array<string>;
};
const initialState: userDataStateType = {
  hasIngredients: [],
  selectedFood: [],
  favoriteFood: [],
  excludingIngredients: [],
};

const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CHANGE_PRODUCT, (state, action: any) => {
        state.hasIngredients = changeIngredientArray(state.hasIngredients, action.payload)
      })
      .addCase(SET_EXCLUDING_PRODUCT, (state, action: any) => {
        state.excludingIngredients = changeIngredientArray(state.excludingIngredients, action.payload)
      });
  },
});

export default userData.reducer;

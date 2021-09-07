import { createSlice } from "@reduxjs/toolkit";
import {
  CHANGE_PRODUCT,
  SET_COOK,
  SET_EXCLUDING_PRODUCT,
  SET_FAVORITE,
  SET_PAGINATION,
  SET_TO_BUY,
} from "../constants";
import { changeIngredientArray } from "../../utils/functions";

type userDataStateType = {
  hasIngredients: Array<string>;
  excludingIngredients: Array<string>;
  toBuy: Array<string>;
  favoriteFood: Array<string>;
  toCook: Array<string>;
  paginationPage: number;
};
const initialState: userDataStateType = {
  hasIngredients: [],
  excludingIngredients: [],
  toBuy: [],
  favoriteFood: [],
  toCook: [],
  paginationPage: 1,
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
        state.paginationPage = 1;
      })
      .addCase(SET_EXCLUDING_PRODUCT, (state, action: any) => {
        state.excludingIngredients = changeIngredientArray(
          state.excludingIngredients,
          action.payload
        );
        state.paginationPage = 1;
      })
      .addCase(SET_TO_BUY, (state, action: any) => {
        state.toBuy = changeIngredientArray(state.toBuy, action.payload);
        state.paginationPage = 1;
      })
      .addCase(SET_FAVORITE, (state, action: any) => {
        state.favoriteFood = changeIngredientArray(
          state.favoriteFood,
          action.payload
        );
        state.paginationPage = 1;
      })
      .addCase(SET_COOK, (state, action: any) => {
        state.toCook = changeIngredientArray(state.toCook, action.payload);
        state.paginationPage = 1;
      })
      .addCase(SET_PAGINATION, (state, action: any) => {
        state.paginationPage = action.payload;
      });
  },
});

export default userData.reducer;

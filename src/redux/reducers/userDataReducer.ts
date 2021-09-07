import { createSlice } from "@reduxjs/toolkit";
import {
  CHANGE_PRODUCT,
  RESTORE_DEFAULT_BY_KEY,
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
        if (
          state.toBuy.indexOf(action.payload) !== -1 &&
          state.hasIngredients.indexOf(action.payload) !== -1
        ) {
          state.toBuy = state.toBuy.filter((el) => el !== action.payload);
        }
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
      })
      .addCase(RESTORE_DEFAULT_BY_KEY, (state, action: any) => {
        switch (action.payload) {
          case "hasIngredients":
            state.hasIngredients = [];
            break;
          case "excludingIngredients":
            state.excludingIngredients = [];
            break;
          case "toBuy":
            state.toBuy = [];
            break;
          case "favoriteFood":
            state.favoriteFood = [];
            break;
          case "toCook":
            state.toCook = [];
            break;
        }
      });
  },
});

export default userData.reducer;

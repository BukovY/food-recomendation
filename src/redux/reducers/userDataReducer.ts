import { createSlice } from "@reduxjs/toolkit";
import {
  CHANGE_PRODUCT,
  RESTORE_DEFAULT_BY_KEY,
  SET_COOK,
  SET_EXCLUDING_PRODUCT,
  SET_FAVORITE,
  SET_PAGINATION,
  SET_TO_BUY,
  SET_SEARCH_VALUE,
} from "../constants";
import { changeIngredientArray } from "../../utils/functions";

type userDataStateType = {
  hasIngredients: Array<string>;
  excludingIngredients: Array<string>;
  toBuy: Array<string>;
  favoriteFood: Array<string>;
  toCook: Array<string>;
  paginationPage: number;
  search: string;
};
const prevDate = localStorage.getItem("userData");
const initialState: userDataStateType = prevDate
  ? JSON.parse(prevDate)
  : {
      hasIngredients: [],
      excludingIngredients: [],
      toBuy: [],
      favoriteFood: [],
      toCook: [],
      paginationPage: 1,
      search: "",
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
        localStorage.setItem("userData", JSON.stringify(state));
      })
      .addCase(SET_EXCLUDING_PRODUCT, (state, action: any) => {
        state.excludingIngredients = changeIngredientArray(
          state.excludingIngredients,
          action.payload
        );
        localStorage.setItem("userData", JSON.stringify(state));
      })
      .addCase(SET_TO_BUY, (state, action: any) => {
        state.toBuy = changeIngredientArray(state.toBuy, action.payload);
        localStorage.setItem("userData", JSON.stringify(state));
      })
      .addCase(SET_FAVORITE, (state, action: any) => {
        state.favoriteFood = changeIngredientArray(
          state.favoriteFood,
          action.payload
        );
        localStorage.setItem("userData", JSON.stringify(state));
      })
      .addCase(SET_COOK, (state, action: any) => {
        state.toCook = changeIngredientArray(state.toCook, action.payload);
        localStorage.setItem("userData", JSON.stringify(state));
      })
      .addCase(SET_PAGINATION, (state, action: any) => {
        state.paginationPage = action.payload;
        localStorage.setItem("userData", JSON.stringify(state));
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
        localStorage.setItem("userData", JSON.stringify(state));
      })
      .addCase(SET_SEARCH_VALUE, (state, action: any) => {
        state.search = action.payload;
        state.paginationPage = 1;
        localStorage.setItem("userData", JSON.stringify(state));
      });
  },
});

export default userData.reducer;

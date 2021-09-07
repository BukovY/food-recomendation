import { createAction } from "@reduxjs/toolkit";
import {
  CHANGE_PRODUCT,
  SET_EXCLUDING_PRODUCT,
  SET_TO_BUY,
  SET_FAVORITE,
  SET_COOK,
} from "../constants";

export const changeProduct = createAction<string>(CHANGE_PRODUCT);
export const setExcludingProduct = createAction<string>(SET_EXCLUDING_PRODUCT);
export const setToBuy = createAction<string>(SET_TO_BUY);
export const setFavorite = createAction<string>(SET_FAVORITE);
export const setCook = createAction<string>(SET_COOK);

import { createAction } from "@reduxjs/toolkit";
import {
  CHANGE_PRODUCT,
  SET_EXCLUDING_PRODUCT,
  SET_TO_BUY,
} from "../constants";

export const changeProduct = createAction<string>(CHANGE_PRODUCT);
export const setExcludingProduct = createAction<string>(SET_EXCLUDING_PRODUCT);
export const setToBuy = createAction<string>(SET_TO_BUY);

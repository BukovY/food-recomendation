import { createAction } from "@reduxjs/toolkit";
import {
  CHANGE_PRODUCT,
  SET_EXCLUDING_PRODUCT,
  SET_TO_BUY,
  SET_FAVORITE,
  SET_COOK,
  SET_PAGINATION,
  RESTORE_DEFAULT_BY_KEY,
  SET_SEARCH_VALUE,
} from "../constants";

export const changeProduct = createAction<string>(CHANGE_PRODUCT);
export const setExcludingProduct = createAction<string>(SET_EXCLUDING_PRODUCT);
export const setToBuy = createAction<string>(SET_TO_BUY);
export const setFavorite = createAction<string>(SET_FAVORITE);
export const setCook = createAction<string>(SET_COOK);
export const setPagination = createAction<number>(SET_PAGINATION);
export const restoreDefaultByKey = createAction<string>(RESTORE_DEFAULT_BY_KEY);
export const setSearchValue = createAction<string>(SET_SEARCH_VALUE);

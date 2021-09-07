import { createAction } from "@reduxjs/toolkit";
import {CHANGE_PRODUCT, SET_EXCLUDING_PRODUCT} from "../constants";

export const changeProduct = createAction<string>(CHANGE_PRODUCT)
export const setExcludingProduct = createAction<string>(SET_EXCLUDING_PRODUCT)
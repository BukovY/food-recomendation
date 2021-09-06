import { createAction } from "@reduxjs/toolkit";
import {CHANGE_PRODUCT} from "../constants";

export const changeProduct = createAction<string>(CHANGE_PRODUCT)
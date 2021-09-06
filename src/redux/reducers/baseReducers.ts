import {createSlice} from "@reduxjs/toolkit";
import {breakfasts} from "../../base/breakfasts.";

const initialState ={
    data: {
        breakfasts: breakfasts
    }
}
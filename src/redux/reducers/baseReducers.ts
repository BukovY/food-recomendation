import { createSlice } from "@reduxjs/toolkit";
import { breakfasts } from "../../base/breakfasts.";

const initialState = {
  data: {
    breakfasts: breakfasts,
  },
};

const base = createSlice({
  name: "base",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default base.reducer;

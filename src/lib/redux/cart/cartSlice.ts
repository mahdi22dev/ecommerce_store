"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCloseCart: (state) => {
      state.open = !state.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openCloseCart } = cartSlice.actions;

export default cartSlice.reducer;

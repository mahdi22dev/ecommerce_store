import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartopen: false },
  reducers: {
    openCloseCart: (state) => {
      state.isCartopen = !state.isCartopen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openCloseCart } = cartSlice.actions;

export default cartSlice.reducer;

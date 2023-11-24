import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartopen: false },
  reducers: {
    openCloseCart: (state) => {
      state.isCartopen = !state.isCartopen;
    },
    addToCart: (state, actions) => {
      // connect to database and add to cart
      console.log(actions.payload);
      console.log(actions.type);
    },
  },
});

// Action creators are generated for each case reducer function
export const { openCloseCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;

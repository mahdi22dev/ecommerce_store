import { FakeData, ItemType } from "@/config/fakedata";
import { createSlice } from "@reduxjs/toolkit";

type cartItemsArray = ItemType[];
export const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartopen: false, CartItems: [] as cartItemsArray },
  reducers: {
    openCloseCart: (state) => {
      state.isCartopen = !state.isCartopen;
    },
    addToCart: (state, actions) => {
      // connect to database and add to cart
      console.log(actions.payload);
      console.log(actions.type);
    },
    fetchCart: (state): any => {
      state.CartItems = [...FakeData];
    },
    removeFromCart: (state, actions) => {
      const id = actions.payload;
      state.CartItems = state.CartItems.filter(
        (item: ItemType) => item._id !== id
      );
      console.log(state.CartItems);
    },
  },
});

// Action creators are generated for each case reducer function
export const { openCloseCart, addToCart, fetchCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

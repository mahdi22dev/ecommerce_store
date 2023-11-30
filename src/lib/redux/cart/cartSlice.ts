import { FakeData, ItemType } from "@/config/fakedata";
import { addtoCartAction } from "@/server-actions/dbActions";
import { createSlice } from "@reduxjs/toolkit";

type cartItemsArray = ItemType[];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartopen: false,
    CartItems: [] as cartItemsArray,
    addToCartLoading: false,
  },
  reducers: {
    openCloseCart: (state) => {
      state.isCartopen = !state.isCartopen;
    },
    addToCart: (state, actions) => {
      state.addToCartLoading = actions.payload;
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

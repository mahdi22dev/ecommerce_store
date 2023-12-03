import { FakeData, ItemType } from "@/config/fakedata";
import { addtoCartAction } from "@/server-actions/dbActions";
import { createSlice } from "@reduxjs/toolkit";

type cartItemsArray = ItemType[];
type dataArray = {
  data: {
    id: string;
    ItemId: string;
    Quantity: number;
    UserId: string;
    price: number;
  }[];
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartopen: false,
    CartItems: [] as cartItemsArray,
    addToCartLoading: false,
    fetchLoading: false,
  },
  reducers: {
    openCloseCart: (state) => {
      state.isCartopen = !state.isCartopen;
    },
    addToCart: (state, actions) => {
      state.addToCartLoading = actions.payload;
    },
    fetchCartItems: (state, actions) => {
      state.CartItems = actions.payload;
    },
    fetchCartCopy: (state): any => {
      state.CartItems = [...FakeData];
    },
    fetchCartLoading: (state, actions) => {
      state.fetchLoading = actions.payload;
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
export const {
  openCloseCart,
  addToCart,
  fetchCartItems,
  removeFromCart,
  fetchCartCopy,
  fetchCartLoading,
} = cartSlice.actions;

export default cartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import userSlice from "./User/userSlice";

const store = configureStore({
  reducer: { cart: cartSlice, user: userSlice },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

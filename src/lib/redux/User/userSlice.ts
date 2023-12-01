import { FakeData, ItemType } from "@/config/fakedata";

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "cart",
  initialState: { userId: "", isSignedIn: false },
  reducers: {
    userId: (state, actions) => {
      state.userId = actions.payload;
    },
    userIsSignedIn: (state, actions) => {
      state.isSignedIn = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userId, userIsSignedIn } = userSlice.actions;

export default userSlice.reducer;

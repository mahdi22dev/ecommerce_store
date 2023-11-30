import { FakeData, ItemType } from "@/config/fakedata";

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "cart",
  initialState: { userId: "" },
  reducers: {
    userId: (state, actions) => {
      state.userId = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userId } = userSlice.actions;

export default userSlice.reducer;

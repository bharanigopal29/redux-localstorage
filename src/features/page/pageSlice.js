import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "user",
  initialState: {
    userinfo: null,
  },
  reducers: {
    UserRole: (state, { payload }) => {
      state.userinfo = payload;
    },
  },
});

export const { UserRole } = pageSlice.actions;
export default pageSlice.reducer;

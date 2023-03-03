import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "AUTHENTICATION",
  initialState: { isAuthenticated: false },

  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

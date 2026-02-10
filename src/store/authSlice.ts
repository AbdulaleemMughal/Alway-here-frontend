import { createSlice } from "@reduxjs/toolkit";
import type { UserType } from "../@types/user.type";

type AuthState = {
  user: UserType | null;
  isLoading: boolean;
};

const initialState: AuthState = {
  user: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;

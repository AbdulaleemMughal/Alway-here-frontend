import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;

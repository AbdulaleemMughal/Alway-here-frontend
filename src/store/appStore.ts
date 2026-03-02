import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice";
import memorialReducer from './memorialSlice';

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    memorial: memorialReducer
  },
});

export type RootState = ReturnType<typeof appStore.getState>;

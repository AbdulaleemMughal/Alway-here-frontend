import { createSlice } from "@reduxjs/toolkit";
import type { MemorialType } from "../@types/memorial.type";

const initialState: MemorialType = {
  userId: "",
  accentColor: "",
  backgroundColor: "",
  textColor: "",
  fontWeight: "",
  isActive: false,
  totalVideos: 0,
  totalTimelines: 0,
  _id: "",
  userDetail: {
    coverImage: "",
    profileImage: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: new Date(),
    dateOfExpiry: new Date(),
    location: "",
    _id: "",
  },
};

const memorialSlice = createSlice({
  name: "Memorial",
  initialState,
  reducers: {
    addMemorial: (_state, action) => {
      return action.payload;
    },
    removeMemorial: (_state) => {
      return {} as MemorialType;
    },
  },
});

export const { addMemorial, removeMemorial } = memorialSlice.actions;

export default memorialSlice.reducer;

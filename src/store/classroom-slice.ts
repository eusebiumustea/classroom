import { createSlice } from "@reduxjs/toolkit";
import { Classroom } from "../models/classroom";

const enrolledClassroom = createSlice({
  name: "enrolled-classroom",
  initialState: [] as Classroom[],
  reducers: {
    setEnrolledClassrooms: (state, { payload }: { payload: Classroom[] }) => {
      return [...state, ...payload];
    },
    clearEnrolledClassrooms: () => {
      return [];
    },
  },
});
const ownedClassroom = createSlice({
  name: "owned-classroom",
  initialState: [] as Classroom[],
  reducers: {
    setOwnedClassrooms: (state, { payload }: { payload: Classroom[] }) => {
      return [...state, ...payload];
    },
    clearOwnedClassrooms: () => {
      return [];
    },
  },
});
export const { setEnrolledClassrooms, clearEnrolledClassrooms } =
  enrolledClassroom.actions;
export const { setOwnedClassrooms, clearOwnedClassrooms } =
  ownedClassroom.actions;
export const ownedClassroomsReducer = ownedClassroom.reducer;
export const enrolledClassroomsReducer = enrolledClassroom.reducer;

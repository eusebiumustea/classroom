import { configureStore } from "@reduxjs/toolkit";
import { authSessionReducer } from "./auth-session-slice";
import {
  enrolledClassroomsReducer,
  ownedClassroomsReducer,
} from "./classroom-slice";

export const store = configureStore({
  reducer: {
    ownedClassroomsReducer,
    enrolledClassroomsReducer,
    authSessionReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";
import { AuthSession } from "../models/auth";

const authSession = createSlice({
  name: "auth-session",
  initialState: () => secureLocalStorage.getItem("session") as AuthSession,
  reducers: {
    setAccessToken: (
      state,
      { payload }: { payload: { accessToken: string; timestamp: string } }
    ) => {
      return {
        email: state?.email,
        refreshGenerationTime: state?.refreshGenerationTime,
        refreshToken: state?.refreshToken,
        accessGenerationTime: new Date(payload.timestamp).getTime(),
        accessToken: payload.accessToken,
      };
    },
    patchAuthCredentials: (
      state,
      { payload }: { payload: Partial<AuthSession> }
    ) => {
      return { ...state, ...payload };
    },
    newAuthSession: (_, { payload }: { payload: AuthSession }) => {
      secureLocalStorage.setItem("session", payload);
      return payload;
    },
    endAuthSession: (state: any) => {
      secureLocalStorage.removeItem("session");
      state = null;
      return state;
    },
  },
});

export const {
  setAccessToken,
  endAuthSession,
  patchAuthCredentials,
  newAuthSession,
} = authSession.actions;

export const authSessionReducer = authSession.reducer;

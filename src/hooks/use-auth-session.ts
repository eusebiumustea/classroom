import { useSelector } from "react-redux";
import { AuthSession } from "../models/auth";

export const useAuthSession = () =>
  useSelector(
    (state: { authSessionReducer: AuthSession }) => state.authSessionReducer
  );

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { authentificateUser, RegisterUser } from "../auth";
import { LoginInput } from "../models/auth";
import { RegisterFormInputs } from "../pages";
import { newAuthSession } from "../store/auth-session-slice";

export function useAuthUtils() {
  const dispatch = useDispatch();
  const signIn = useCallback(async (data: LoginInput) => {
    try {
      const result = await authentificateUser(data);
      if (!result) {
        return;
      }

      if (!result.refreshToken || !result.accessToken || !result.timestamp) {
        // cand apare eroare la log in
        toast.error("Login failed. Please check your credentials.");
        return null;
      }
      dispatch(
        newAuthSession({
          email: data.email,
          refreshToken: result.refreshToken,
          accessToken: result.accessToken,
          accessGenerationTime: new Date(result.timestamp).getTime(),
          refreshGenerationTime: new Date(result.timestamp).getTime(),
        })
      );

      toast.success("Login successful!");
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
    }
  }, []);
  const signUp = useCallback(async (data: RegisterFormInputs) => {
    try {
      const newCredentials = await RegisterUser({
        firstname: data.firstName,
        lastname: data.lastName,
        dateOfBirth: data.dateOfBirth,
        password: data.password,
        email: data.email,
        username: data.username,
      });
      if (newCredentials) {
        dispatch(newAuthSession(newCredentials));
        toast.success("Registration successful!");
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
    }
  }, []);
  return { signIn, signUp };
}

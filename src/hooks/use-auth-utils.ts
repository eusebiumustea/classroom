import { useCallback } from "react";
import { authentificateUser, RegisterUser } from "../auth";
import { LoginInput } from "../models/auth";
import { RegisterFormInputs } from "../pages";
import { useAuthSession } from "./use-auth-session";
import { toast } from "react-toastify";

export function useAuthUtils() {
  const [_, setAuthSession] = useAuthSession();
  const signIn = useCallback(async (data: LoginInput) => {
    try {
      const result = await authentificateUser(data);

      if ((result && !result.refreshToken) || !result.accessToken) {
        // cand apare eroare la log in
        toast.error("Login failed. Please check your credentials.");
        return null;
      }
      if (result) {
        setAuthSession({
          email: data.email,
          refreshToken: result.refreshToken,
          accessToken: result.accessToken,
        });
      }
      toast.success("Login successful!");
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
    }
  }, []);
  const signUp = useCallback(async (data: RegisterFormInputs) => {
    try {
      const newAuthSession = await RegisterUser({
        firstname: data.firstName,
        lastname: data.lastName,
        dateOfBirth: data.dateOfBirth,
        password: data.password,
        email: data.email,
        username: data.username,
      });
      if (newAuthSession) {
        setAuthSession(newAuthSession);
        toast.success("Registration successful!");
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
    }
  }, []);
  return { signIn, signUp };
}

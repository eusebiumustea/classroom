import { useCallback } from "react";
import { authentificateUser, RegisterUser } from "../auth";
import { LoginInput } from "../models/auth";
import { RegisterFormInputs } from "../pages";
import { useAuthSession } from "./use-auth-session";

export function useAuthUtils() {
  const [_, setAuthSession] = useAuthSession();
  const signIn = useCallback(async (data: LoginInput) => {
    try {
      const result = await authentificateUser(data);
      if (!result) {
        return;
      }
      console.log(result);

      if (!result.refreshToken || !result.accessToken || !result.timestamp) {
        // cand apare eroare la log in
        return null;
      }
      setAuthSession({
        email: data.email,
        refreshToken: result.refreshToken,
        accessToken: result.accessToken,
        accessGenerationTime: new Date(result.timestamp).getTime(),
        refreshGenerationTime: new Date(result.timestamp).getTime(),
      });
    } catch (error) {}
  }, []);
  const signUp = useCallback(async (data: RegisterFormInputs) => {
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
    }
  }, []);
  return { signIn, signUp };
}

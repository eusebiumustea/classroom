import axios from "axios";
import { AuthSession, LoginInput, RegisterInput } from "../models/auth";
export const hostUrl = import.meta.env.VITE_HOST || "http://localhost:8080";

export async function RegisterUser(
  user: RegisterInput
): Promise<AuthSession | null> {
  try {
    const url = `${hostUrl}/register`;
    await axios.post(url, user);
    const authResponse = await authentificateUser({
      email: user.email,
      password: user.password,
    });
    if (authResponse) {
      return {
        email: user.email,
        refreshToken: authResponse.refreshToken,
        accessToken: authResponse.accessToken,
        accessGenerationTime: new Date(authResponse.timestamp).getTime(),
        refreshGenerationTime: new Date(authResponse.timestamp).getTime(),
      };
    }
    return null;
  } catch (error) {
    return null;
  }
}
export async function authentificateUser(user: LoginInput) {
  try {
    const url = `${hostUrl}/login`;
    const request = await axios.post(url, user);
    return request.data;
  } catch (error) {
    return null;
  }
}

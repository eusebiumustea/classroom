import axios, { AxiosRequestConfig } from "axios";
import { useCallback } from "react";
import { hostUrl } from "../auth";
import { refreshAccessToken } from "../utils/token";
import { useAuthSession } from "./use-auth-session";
export const useAuthentificationRequest = () => {
  const [authSession, setAuthSession] = useAuthSession();
  return useCallback(
    async <D = any>(config: AxiosRequestConfig<D>) => {
      try {
        if (!authSession) return Promise.resolve(null); // daca user ul NU este logat
        const isRefreshTokenExpired =
          new Date().getTime() >= authSession.refreshGenerationTime + 86400000;
        if (isRefreshTokenExpired) {
          setAuthSession(null);
          return Promise.resolve(null);
        }
        const isAccessTokenExpired =
          new Date().getTime() >= authSession.accessGenerationTime + 3600000;
        if (isAccessTokenExpired) {
          console.log(authSession.refreshToken);

          const data = await refreshAccessToken(authSession.refreshToken);

          if (data) {
            setAuthSession({
              ...authSession,
              accessToken: data.accessToken,
              accessGenerationTime: new Date(data.timestamp).getTime(),
            });
            console.log("new auth", authSession);
          }
        }
        const req = await axios.request({
          ...config,
          headers: { Authorization: `Bearer ${authSession.accessToken}` },
          url: `${hostUrl}${config.url}`,
        });
        return req;
      } catch (error) {
        console.log(error);
      }
    },
    [authSession]
  );
};

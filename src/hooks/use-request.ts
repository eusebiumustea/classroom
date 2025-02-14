import axios, { AxiosRequestConfig } from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { hostUrl } from "../auth";
import { endAuthSession, setAccessToken } from "../store/auth-session-slice";
import { refreshAccessToken } from "../utils/token";
import { useAuthSession } from "./use-auth-session";
export const useAuthentificationRequest = () => {
  const authSession = useAuthSession();
  const dispatch = useDispatch();
  return useCallback(
    async <D = any>(config: AxiosRequestConfig<D>) => {
      try {
        if (!authSession) {
          toast.error("No authentification session detected");
          return Promise.resolve(null);
        } // daca user ul NU este logat
        const isRefreshTokenExpired =
          new Date().getTime() >= authSession.refreshGenerationTime + 86400000;
        if (isRefreshTokenExpired) {
          dispatch(endAuthSession());
          return Promise.resolve(null);
        }
        const isAccessTokenExpired =
          new Date().getTime() >= authSession.accessGenerationTime + 3600000;
        if (isAccessTokenExpired) {
          const data = await refreshAccessToken(authSession.refreshToken);

          if (!data) return Promise.resolve(null);
          dispatch(
            setAccessToken({
              accessToken: data.accessToken,
              timestamp: data.timestamp,
            })
          );
        }
        const req = await axios.request({
          ...config,
          headers: { Authorization: `Bearer ${authSession.accessToken}` },
          url: `${hostUrl}${config.url}`,
        });

        return req;
      } catch (error) {
        toast.error(`${error}`);
      }
    },
    [authSession]
  );
};

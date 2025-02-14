import { memo, PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthSession } from "../hooks";

export const AuthGuard = memo(({ children }: PropsWithChildren) => {
  const authSession = useAuthSession();
  const nav = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!authSession) {
      nav(pathname === "/register" ? "/register" : "/login");
    } else {
      nav("/");
    }
  }, [authSession]);

  return children;
});

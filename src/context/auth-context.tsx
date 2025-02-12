import {
  createContext,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { AuthSession } from "../models/auth";

export const AuthSessionContext = createContext<
  [AuthSession | null, (session: AuthSession | null) => void]
>([null, () => {}]);
export const AuthSessionProvider = memo(({ children }: PropsWithChildren) => {
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const setNewAuthSession = useCallback(
    (newAuthSession: AuthSession | null) => {
      if (newAuthSession == null) {
        localStorage.removeItem("session");
        setAuthSession(null);
        return;
      }
      localStorage.setItem("session", JSON.stringify(newAuthSession));
      setAuthSession(newAuthSession);
    },
    []
  );
  useEffect(() => {
    const storedAuthSession = localStorage.getItem("session");
    if (storedAuthSession) {
      const currentAuthSession: AuthSession = JSON.parse(storedAuthSession);
      setAuthSession(currentAuthSession);
    }
  }, []);

  return (
    <AuthSessionContext value={[authSession, setNewAuthSession]}>
      {children}
    </AuthSessionContext>
  );
});

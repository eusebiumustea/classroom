import {
  createContext,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import secureLocalStorage from "react-secure-storage";
import { AuthSession } from "../models/auth";
export const AuthSessionContext = createContext<
  [AuthSession | null, (session: AuthSession | null) => void]
>([null, () => {}]);
export const AuthSessionProvider = memo(({ children }: PropsWithChildren) => {
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const setNewAuthSession = useCallback(
    (newAuthSession: AuthSession | null) => {
      if (newAuthSession == null) {
        secureLocalStorage.removeItem("session");
        setAuthSession(null);
        return;
      }
      secureLocalStorage.setItem("session", newAuthSession);
      setAuthSession(newAuthSession);
    },
    []
  );
  useEffect(() => {
    const storedAuthSession = secureLocalStorage.getItem("session");
    if (storedAuthSession) {
      setAuthSession(storedAuthSession as AuthSession);
    }
  }, []);

  return (
    <AuthSessionContext value={[authSession, setNewAuthSession]}>
      {children}
    </AuthSessionContext>
  );
});

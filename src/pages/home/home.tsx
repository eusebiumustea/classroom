import { memo, useCallback } from "react";
import { useAuthSession } from "../../hooks";

export const Home = memo(() => {
  const [authSession, setAuthSession] = useAuthSession();
  const signOut = useCallback(() => {
    setAuthSession(null);
  }, []);
  return (
    <div>
      <div>email: {authSession?.email}</div>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
});

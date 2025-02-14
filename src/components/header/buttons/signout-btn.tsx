import { useCallback } from "react";
import { FaSignOutAlt } from "react-icons/fa";

import { toast } from "react-toastify";
import { useAuthSession } from "../../../hooks";

export function SignOutButton() {
  const [_, setAuthSession] = useAuthSession();

  const signOut = useCallback(() => {
    setAuthSession(null);
    toast.success("You have signed out successfully!");
  }, [setAuthSession]);

  return (
    <button
      onClick={signOut}
      className="flex items-center cursor-pointer gap-2 text-green-500 hover:text-green-700 transition"
    >
      <FaSignOutAlt size={24} />
      <span>Sign Out</span>
    </button>
  );
}

import { useCallback } from "react";
import { FaSignOutAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { endAuthSession } from "../../../store/auth-session-slice";

export function SignOutButton() {
  const dispatch = useDispatch();

  const signOut = useCallback(() => {
    dispatch(endAuthSession());
    toast.success("You have signed out successfully!");
  }, []);

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

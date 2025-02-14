import { memo, useCallback, useEffect, useState } from "react";
import { FaBars, FaGraduationCap } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useAuthentificationRequest, useAuthSession } from "../../hooks";
import {
  setEnrolledClassrooms,
  setOwnedClassrooms,
} from "../../store/classroom-slice";
import { ButtonHeader, SignOutButton } from "./buttons";
import { CreateClassModal, JoinClassModal } from "./modal";
import { Sidebar } from "./sidebar";
import { toast } from "react-toastify";

export const Header = memo(() => {
  const request = useAuthentificationRequest();
  const dispatch = useDispatch();
  const getAppData = useCallback(async () => {
    try {
      const enrolledClassroomsResponse = await request({
        url: `/enrolled-classrooms`,
        method: "GET",
      });

      if (enrolledClassroomsResponse) {
        if (enrolledClassroomsResponse?.data?.length > 0) {
          dispatch(setEnrolledClassrooms(enrolledClassroomsResponse.data));
        }
      }
      const ownedClassroomsResponse = await request({
        url: `/owned-classrooms`,
        method: "GET",
      });

      if (ownedClassroomsResponse) {
        if (ownedClassroomsResponse?.data?.length > 0) {
          dispatch(setOwnedClassrooms(ownedClassroomsResponse.data));
        }
      }
    } catch (error) {
      toast.error(`${error}`);
    }
  }, []);
  useEffect(() => {
    getAppData();
  }, []);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const authSession = useAuthSession();

  const toggleDropdown = useCallback(
    () => setDropdownOpen((prev) => !prev),
    []
  );
  const toggleSidebar = useCallback(
    () => setSidebarExpanded((prev) => !prev),
    []
  );

  const handleCreateCourse = useCallback(() => {
    setCreateModalOpen(true);
    setDropdownOpen(false);
  }, []);

  const handleJoinCourse = useCallback(() => {
    setJoinModalOpen(true);
    setDropdownOpen(false);
  }, []);

  return (
    <header className="relative h-20 flex w-full items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
      <div className="flex items-center gap-2 cursor-pointer select-none">
        {isSidebarExpanded ? (
          <IoMdClose
            className="h-6 w-6 text-green-700 "
            onClick={toggleSidebar}
          />
        ) : (
          <FaBars className="h-6 w-6 text-green-700 " onClick={toggleSidebar} />
        )}
        <FaGraduationCap className="h-8 w-12 text-green-700 pl-4" />
        <h2 className="text-lg font-semibold text-green-700">Classroom</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <ButtonHeader
            className="hover:backdrop-brightness-90"
            onClick={toggleDropdown}
          >
            <FiPlus size={28} />
          </ButtonHeader>
          {isDropdownOpen && (
            <div className="absolute right-0 bg-white rounded-2xl shadow-lg p-2 z-10 w-40">
              <ButtonHeader
                className="hover:backdrop-brightness-90 transition-all w-full"
                onClick={handleCreateCourse}
              >
                Create Course
              </ButtonHeader>
              <ButtonHeader
                className="hover:backdrop-brightness-90 transition-all w-full"
                onClick={handleJoinCourse}
              >
                Join Course
              </ButtonHeader>
            </div>
          )}
        </div>
        <div className="underline">{authSession?.email}</div>
        <SignOutButton />
      </div>
      <Sidebar
        onClose={() => setSidebarExpanded(false)}
        isExpanded={isSidebarExpanded}
      />
      {isCreateModalOpen && (
        <CreateClassModal onClose={() => setCreateModalOpen(false)} />
      )}
      {isJoinModalOpen && (
        <JoinClassModal onClose={() => setJoinModalOpen(false)} />
      )}
    </header>
  );
});

import { useState } from "react";
import { ButtonHeader, SignOutButton } from "./buttons";
import { CreateClassModal, JoinClassModal } from "./modal";
import { FaGraduationCap, FaBars } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useAuthSession } from "../../hooks";
import { Sidebar } from "./sidebar";

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [authSession] = useAuthSession();

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleSidebar = () => setSidebarExpanded(!isSidebarExpanded);

  const handleCreateCourse = () => {
    setCreateModalOpen(true);
    setDropdownOpen(false);
  };

  const handleJoinCourse = () => {
    setJoinModalOpen(true);
    setDropdownOpen(false);
  };

  return (
    <header className="relative flex w-full items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
      <div className="flex items-center gap-2 cursor-pointer">
        <FaBars className="h-6 w-6 text-green-700 " onClick={toggleSidebar} />
        <FaGraduationCap className="h-8 w-12 text-green-700 pl-4" />
        <h2 className="text-lg font-semibold text-green-700">Classroom</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <ButtonHeader onClick={toggleDropdown}>
            <FiPlus size={28} />
          </ButtonHeader>
          {isDropdownOpen && (
            <div className="absolute right-0 bg-white rounded shadow-lg p-2 z-10 w-40">
              <ButtonHeader onClick={handleCreateCourse}>
                Create Course
              </ButtonHeader>
              <ButtonHeader onClick={handleJoinCourse}>
                Join Course
              </ButtonHeader>
            </div>
          )}
        </div>
        <div className="underline">{authSession?.email}</div>
        <SignOutButton />
      </div>
      <Sidebar isExpanded={isSidebarExpanded} />
      {isCreateModalOpen && (
        <CreateClassModal onClose={() => setCreateModalOpen(false)} />
      )}
      {isJoinModalOpen && (
        <JoinClassModal onClose={() => setJoinModalOpen(false)} />
      )}
    </header>
  );
}

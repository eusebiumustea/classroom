import { memo, useState } from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { useEnrolledClassrooms, useOwnedClassrooms } from "../../hooks";
import { ClassroomsList } from "../classrooms-list";
import { ButtonHeader } from "./buttons";

export const Sidebar = memo(
  ({
    isExpanded = false,
    onClose,
  }: {
    isExpanded: boolean;
    onClose: () => void;
  }) => {
    const [isCoursesOpen, setCoursesOpen] = useState(false);
    const [isCreatedCoursesOpen, setCreatedCoursesOpen] = useState(false);

    // useLayoutEffect(() => {
    //   if (!isExpanded) {
    //     setCreatedCoursesOpen(false);
    //     setCoursesOpen(false);
    //   }
    // }, [isExpanded]);
    const ownedClassrooms = useOwnedClassrooms();
    const enrolledClassrooms = useEnrolledClassrooms();
    return (
      <div
        className={`fixed top-20 left-0 h-[calc(100%-5rem)] bg-white border-r border-gray-300 shadow-lg z-40 transition-all duration-300 ${
          isExpanded ? "w-64" : "w-16"
        }`}
      >
        <nav className="w-full flex flex-col">
          <ButtonHeader
            onClick={() => isExpanded && setCoursesOpen(!isCoursesOpen)}
            iconLeft={<FaBook size={24} className="text-green-700" />}
            iconRight={
              isExpanded ? (
                isCoursesOpen ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )
              ) : null
            }
          >
            {isExpanded && "Courses Enrolled"}
          </ButtonHeader>
          {isExpanded && isCoursesOpen && (
            <ClassroomsList
              type="enrolled"
              data={enrolledClassrooms}
              onOpenClassroom={onClose}
            />
          )}

          <ButtonHeader
            onClick={() =>
              isExpanded && setCreatedCoursesOpen(!isCreatedCoursesOpen)
            }
            iconLeft={
              <FaChalkboardTeacher size={24} className="text-green-700" />
            }
            iconRight={
              isExpanded ? (
                isCreatedCoursesOpen ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )
              ) : null
            }
          >
            {isExpanded && "Created Courses"}
          </ButtonHeader>
          {isExpanded && isCreatedCoursesOpen && (
            <ClassroomsList
              type="owned"
              data={ownedClassrooms}
              onOpenClassroom={onClose}
            />
          )}
        </nav>
      </div>
    );
  }
);

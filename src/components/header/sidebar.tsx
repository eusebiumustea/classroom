import { useState } from "react";
import { ButtonHeader } from "./buttons";
import {
  FaBook,
  FaChalkboardTeacher,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

export function Sidebar({
  isExpanded = false,
}: {
  isExpanded: boolean;
  onClose?: () => void;
}) {
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [isCreatedCoursesOpen, setCreatedCoursesOpen] = useState(false);

  return (
    <div
      className={`fixed top-18 left-0 h-[calc(100%-4rem)] bg-white border-r border-gray-300 shadow-lg z-40 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-14"
      }`}
    >
      <nav>
        <ButtonHeader
          onClick={() => isExpanded && setCoursesOpen(!isCoursesOpen)}
          iconLeft={<FaBook className="h-6 w-6 text-green-700" />}
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
          <ul className="pl-8 space-y-2">
            <li className="text-gray-600">test</li>
          </ul>
        )}

        <ButtonHeader
          onClick={() =>
            isExpanded && setCreatedCoursesOpen(!isCreatedCoursesOpen)
          }
          iconLeft={<FaChalkboardTeacher className="h-6 w-6 text-green-700" />}
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
          <ul className="pl-8 space-y-2">
            <li className="text-gray-600">test</li>
          </ul>
        )}
      </nav>
    </div>
  );
}

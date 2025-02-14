import { memo } from "react";
interface ClassroomCardProps {
  name: string;
  onClick?: () => void;
}
export const ClassroomItem = memo(({ name, onClick }: ClassroomCardProps) => {
  return (
    <li>
      <button
        onClick={onClick}
        className="w-full duration-300 cursor-pointer bg-green-200 hover:bg-green-600 transition-colors rounded-2xl px-2 py-1"
      >
        {name}
      </button>
    </li>
  );
});

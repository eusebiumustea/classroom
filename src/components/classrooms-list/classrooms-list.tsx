import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Classroom } from "../../models/classroom";
import { ClassroomItem } from "../classroom-item";

export const ClassroomsList = memo(
  ({
    data,
    onOpenClassroom,
    type,
  }: {
    data: Classroom[];
    type: "enrolled" | "owned";
    onOpenClassroom: () => void;
  }) => {
    const nav = useNavigate();

    return (
      <ul className="w-full pl-8 space-y-2">
        {data.map((item, i) => (
          <ClassroomItem
            onClick={() => {
              if (item.id) {
                nav(`/classroom/${item.id}/${type}`);
                onOpenClassroom();
              }
            }}
            key={i}
            name={item.name}
          />
        ))}
      </ul>
    );
  }
);

import { memo } from "react";

export const ClassroomHeaderItem = memo(
  ({ name, value }: { name: string; value: string }) => {
    return (
      <h1 className="text-xl">
        <span className="font-black mr-2.5">{name}:</span>
        {value}
      </h1>
    );
  }
);

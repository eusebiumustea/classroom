import { useState } from "react";
import { ButtonHeader } from "../buttons";
import { InputHeader } from "../input-header";
import { Modal } from "./modal";

export function JoinClassModal({ onClose }: { onClose: () => void }) {
  const [courseCode, setCourseCode] = useState("");

  return (
    <Modal onClose={onClose} title="Join a Course">
      <form>
        <div className="p-3">
          <h2>Ask your teacher for the course code, then enter it here.</h2>
        </div>
        <InputHeader
          id="courseCode"
          value={courseCode}
          onChange={setCourseCode}
        >
          Course Code
        </InputHeader>
        <div className="flex justify-end gap-2 mt-4">
          <ButtonHeader onClick={onClose} variant="secondary">
            Cancel
          </ButtonHeader>
          <ButtonHeader>Join</ButtonHeader>
        </div>
      </form>
    </Modal>
  );
}

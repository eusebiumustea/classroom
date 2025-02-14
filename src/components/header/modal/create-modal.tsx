import { useState } from "react";

import { InputHeader } from "../input-header";
import { Modal } from "./modal";
import { ButtonHeader } from "../buttons";

export function CreateClassModal({ onClose }: { onClose: () => void }) {
  const [courseName, setCourseName] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Modal onClose={onClose} title="Create Course">
      <form>
        <InputHeader
          id="courseName"
          value={courseName}
          onChange={setCourseName}
        >
          Course Name
        </InputHeader>
        <InputHeader id="section" value={section} onChange={setSection}>
          Section
        </InputHeader>
        <InputHeader id="subject" value={subject} onChange={setSubject}>
          Subject
        </InputHeader>
        <InputHeader id="room" value={room} onChange={setRoom}>
          Room
        </InputHeader>
        <div className="flex justify-end gap-2 mt-4">
          <ButtonHeader onClick={onClose} variant="secondary">
            Cancel
          </ButtonHeader>
          <ButtonHeader>Create</ButtonHeader>
        </div>
      </form>
    </Modal>
  );
}

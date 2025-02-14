import { memo, useCallback, useState } from "react";

import { useDispatch } from "react-redux";
import { useAuthentificationRequest } from "../../../hooks";
import { Classroom } from "../../../models/classroom";
import { setOwnedClassrooms } from "../../../store/classroom-slice";
import { ButtonHeader } from "../buttons";
import { InputHeader } from "../input-header";
import { Modal } from "./modal";

export const CreateClassModal = memo(({ onClose }: { onClose: () => void }) => {
  const [courseName, setCourseName] = useState("");
  const [subject, setSubject] = useState("");
  const dispatch = useDispatch();
  const request = useAuthentificationRequest();

  const onSubmit = useCallback(async () => {
    try {
      const res = await request({
        url: "/create-classroom",
        method: "POST",
        data: { subject, name: courseName } as Classroom,
      });
      if (!res || !res.data.id) {
        return;
      }
      dispatch(setOwnedClassrooms([res.data]));
    } catch (error) {
    } finally {
      onClose();
    }
  }, [subject, courseName]);
  return (
    <Modal onClose={onClose} title="Create Course">
      <form className="flex flex-col gap-6">
        <InputHeader
          id="courseName"
          value={courseName}
          onChange={setCourseName}
        >
          Course Name
        </InputHeader>

        <InputHeader id="subject" value={subject} onChange={setSubject}>
          Subject
        </InputHeader>

        <div className="flex justify-end gap-2 mt-4">
          <ButtonHeader onClick={onClose} variant="secondary">
            Cancel
          </ButtonHeader>
          <ButtonHeader
            className="hover:backdrop-brightness-90"
            onClick={onSubmit}
          >
            Create
          </ButtonHeader>
        </div>
      </form>
    </Modal>
  );
});

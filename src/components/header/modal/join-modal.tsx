import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuthentificationRequest } from "../../../hooks";
import { setEnrolledClassrooms } from "../../../store/classroom-slice";
import { ButtonHeader } from "../buttons";
import { InputHeader } from "../input-header";
import { Modal } from "./modal";

export function JoinClassModal({ onClose }: { onClose: () => void }) {
  const [courseCode, setCourseCode] = useState("");
  const dispatch = useDispatch();
  const request = useAuthentificationRequest();

  const onSubmit = useCallback(async () => {
    try {
      const res = await request({
        url: "/join-classroom",
        method: "POST",
        data: { classroomCode: courseCode },
      });
      if (!res || !res.data.id) {
        return;
      }
      dispatch(setEnrolledClassrooms([res.data]));
    } catch (error) {
    } finally {
      onClose();
    }
  }, [courseCode]);
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
          <ButtonHeader
            className="hover:backdrop-brightness-90"
            onClick={onSubmit}
          >
            Join
          </ButtonHeader>
        </div>
      </form>
    </Modal>
  );
}

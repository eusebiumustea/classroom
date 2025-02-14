import { useSelector } from "react-redux";
import { Classroom } from "../models/classroom";

export const useOwnedClassrooms = () =>
  useSelector(
    (state: { ownedClassroomsReducer: Classroom[] }) =>
      state.ownedClassroomsReducer
  );
export const useEnrolledClassrooms = () =>
  useSelector(
    (state: { enrolledClassroomsReducer: Classroom[] }) =>
      state.enrolledClassroomsReducer
  );

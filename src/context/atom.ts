import { atom } from "recoil";
import { Classroom } from "../models/classroom";

export const enrolledClassRoomsAtom = atom<Classroom[]>({
  key: "enrolled-classrooms-list",
  default: [],
});
export const ownedClassRoomsAtom = atom<Classroom[]>({
  key: "owned-classrooms-list",
  default: [],
});

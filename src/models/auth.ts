export interface Register {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  dateOfBirth: Date;
  password: string;
}
export interface Login {
  email: string;
  password: string;
}

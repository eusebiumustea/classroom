export interface RegisterInput {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  dateOfBirth: string;
  password: string;
}
export interface LoginInput {
  email: string;
  password: string;
}
export interface AuthSession {
  email: string;
  refreshToken: string;
  accessToken: string;
}

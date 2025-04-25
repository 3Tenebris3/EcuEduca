export interface LoginDTO {
  email: string;
  password: string;
}
export interface RegisterDTO {
  email: string;
  password: string;
  displayName: string;
  role?: string;
}
export interface UserModel {
  id: string;
  email: string;
  displayName: string;
  roles: string[];
  classes: string[];
  profilePicture?: string;
}

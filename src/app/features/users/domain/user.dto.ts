// domain/user.model.ts
export interface UserModel {
  id: string;
  email: string;
  displayName: string;
  roles: string[];
  classes: string[];
  profilePicture?: string;
  createdAt?: string;
  updatedAt?: string;
}

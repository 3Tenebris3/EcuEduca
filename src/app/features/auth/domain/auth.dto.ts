export interface User {
  id: string;
  email: string;
  displayName: string;
  role: 'teacher' | 'admin' | 'student' | 'parent';
}
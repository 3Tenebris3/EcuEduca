export interface LoginDTO { email: string; password: string; }

export interface RegisterDTO extends LoginDTO {
  displayName: string;
  role?: 'teacher' | 'admin' | 'student' | 'parent';
}

export interface AuthResponse {
  accessToken:  string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    displayName: string;
    role: 'teacher' | 'admin' | 'student' | 'parent';
  };
}
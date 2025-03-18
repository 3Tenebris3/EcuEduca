// src/app/core/services/auth/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'access_token';

  constructor() {}

  // Guarda el token en localStorage (o sessionStorage)
  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // true si existe un token
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}

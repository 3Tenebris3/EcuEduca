// src/app/core/services/auth/auth.service.ts
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'access_token'; //***
  private secret = 'SECRET_KEY'; //***

  storeToken(token: string): void {
    // Encriptamos con AES
    const ciphertext = CryptoJS.AES.encrypt(token, this.secret).toString();
    localStorage.setItem(this.tokenKey, ciphertext);
  }

  getToken(): string | null {
    const ciphertext = localStorage.getItem(this.tokenKey);
    if (!ciphertext) return null;

    try {
      const bytes = CryptoJS.AES.decrypt(ciphertext, this.secret);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch(e) {
      console.error('Error al desencriptar token', e);
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}

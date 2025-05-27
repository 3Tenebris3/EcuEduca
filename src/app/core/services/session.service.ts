import { Injectable } from '@angular/core';
import { User } from '@features/auth/domain/auth.dto';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private _user: User | null = null;

  /* ========== TOKENS ========== */
  get token(): string | null { return localStorage.getItem('token'); }
  get refresh(): string | null { return localStorage.getItem('refresh'); }

  /* ========== USUARIO Y ROL ========== */
  get user(): User | null { return this._user; }
  get role(): string | null { return this._user?.role ?? null; }

  /* === NUEVO getter isAuth === */
  get isAuth(): boolean { return !!this.token; }

  /* ========== MÉTODOS ========== */
  start(user: User, tokens: { access: string; refresh: string }) {
    this._user = user;
    localStorage.setItem('token', tokens.access);
    localStorage.setItem('refresh', tokens.refresh);
  }

  setUser(user: User) { this._user = user; }

  clear() {
    this._user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
  }
}
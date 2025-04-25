import { Injectable } from "@angular/core";
import { UserModel } from "@features/auth/domain/auth.dto";

@Injectable({ providedIn: 'root' })
export class SessionService {
  private TK = 'token';
  private USR = 'user';
  private _user?: UserModel;

  /* ---------- token ---------- */
  setToken(t: string)  { localStorage.setItem(this.TK, t); }
  get token(): string | null { return localStorage.getItem(this.TK); }
  clearToken()         { localStorage.removeItem(this.TK); }

  /* ---------- perfil ---------- */
  setUser(u: UserModel) {
    this._user = u;
    localStorage.setItem(this.USR, JSON.stringify(u));
  }
  get user(): UserModel | undefined {
    return this._user ?? JSON.parse(localStorage.getItem(this.USR) || 'null');
  }
  get role(): string { return this.user?.roles[0] || ''; }
  get isAuth(): boolean { return !!this.token; }

  clear() {
    this.clearToken();
    localStorage.removeItem(this.USR);
    this._user = undefined;
  }
}

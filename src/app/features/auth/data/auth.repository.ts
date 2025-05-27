import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// Update the import path below to the correct relative path where 'auth.api' is located, for example:
import { AuthApi } from '@api/auth/auth.api';
import { LoginDTO, RegisterDTO } from '@api/auth/auth.types';
import { User } from '../domain/auth.dto';

interface Tokens { access: string; refresh: string; }

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  constructor(private api: AuthApi) {}

  login(dto: LoginDTO) {
    return this.api.login(dto).pipe(map(r => toDomain(r)));
  }
  register(dto: RegisterDTO) {
    return this.api.register(dto).pipe(map(r => toDomain(r)));
  }
}

function toDomain(r: any): { user: User; tokens: Tokens } {
  return {
    user:   { ...r.user },
    tokens: { access: r.accessToken, refresh: r.refreshToken }
  };
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { LoginDTO, RegisterDTO, AuthResponse } from './auth.types';

@Injectable({ providedIn: 'root' })
export class AuthApi {
  constructor(private api: ApiService) {}

  login(dto: LoginDTO):    Observable<AuthResponse> { return this.api.post('/auth/login',    dto); }
  register(dto: RegisterDTO): Observable<AuthResponse> { return this.api.post('/auth/register', dto); }
}
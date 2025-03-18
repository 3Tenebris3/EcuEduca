// src/app/infrastructure/repositories/auth.repository.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/http/api.service';
import { LoginPayload } from '../../../domain/models/auth/login-payload.model';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  private endpoint = 'auth';

  constructor(private api: ApiService) {}

  // Llamada al backend para login
  // POST /auth/login con { email, password }
  login(payload: LoginPayload): Observable<{ token: string }> {
    // Si es un backend real:
    // return this.api.post<{ token: string }>(`${this.endpoint}/login`, payload);

    // O si estás simulando:
    return this.fakeLogin(payload);
  }

  // Simulación de login
  private fakeLogin(payload: LoginPayload): Observable<{ token: string }> {
    // Lógica de simulación: si coincide con algo, retorna token
    if (payload.email === 'test@example.com' && payload.password === 'password123') {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({ token: 'FAKE-TOKEN' });
          observer.complete();
        }, 1000);
      });
    } else {
      return new Observable(observer => {
        setTimeout(() => {
          observer.error(new Error('Invalid credentials'));
        }, 1000);
      });
    }
  }
}

//return this.api.post<{ token: string }>(
//  `${this.endpoint}/login`,
//  payload
//);
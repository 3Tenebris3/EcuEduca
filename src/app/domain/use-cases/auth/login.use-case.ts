// src/app/domain/use-cases/auth/login.use-case.ts
import { Injectable } from '@angular/core';
import { AuthRepository } from '../../../infrastructure/repositories/auth/auth.repository';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Observable, tap } from 'rxjs';
import { LoginPayload } from '../../../domain/models/auth/login-payload.model';

@Injectable({
  providedIn: 'root'
})
export class LoginUseCase {
  constructor(
    private authRepo: AuthRepository,
    private authService: AuthService
  ) {}

  execute(payload: LoginPayload): Observable<{ token: string }> {
    return this.authRepo.login(payload).pipe(
      tap(response => {
        // Guardar token en localStorage (o donde tengas tu lógica)
        this.authService.storeToken(response.token);
      })
    );
  }
}
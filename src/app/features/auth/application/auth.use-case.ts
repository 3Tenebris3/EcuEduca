import { SessionService } from '@core/services/session.service';
import { LoginDTO, RegisterDTO, UserModel } from '../domain/auth.dto';
import { AuthRepository } from '../data/auth.repository';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginUseCase {
  constructor(
    private repo: AuthRepository,
    private session: SessionService,
    private getProfileUC: GetProfileUseCase
  ) {}

  exec(dto: LoginDTO): Observable<void> {
    return this.repo.login(dto).pipe(
      tap((r: any) => this.session.setToken(r.data.token)), // guarda JWT
      switchMap(() => this.getProfileUC.exec()), // carga perfil
      map(() => void 0) // devuelve vacío
    );
  }
}

@Injectable({ providedIn: 'root' })
export class RegisterUseCase {
  constructor(private repo: AuthRepository, private session: SessionService) {}
  exec(dto: RegisterDTO) {
    return this.repo
      .register(dto)
      .pipe(
        tap((r: any) => {
          this.session.setToken(r.data.token); // Set the token
        })
      );
  }
}

// src/app/features/auth/application/get-profile.use-case.ts
@Injectable({ providedIn: 'root' })
export class GetProfileUseCase {
  constructor(private repo: AuthRepository, private session: SessionService) {}

  exec(): Observable<UserModel> {
    return this.repo.getProfile().pipe(
      map((r) => r.data),
      tap((profile) => this.session.setUser(profile))
    );
  }
}

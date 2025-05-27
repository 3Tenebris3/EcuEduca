import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthRepository } from '../data/auth.repository';
import { LoginDTO, RegisterDTO } from '@api/auth/auth.types';
import { SessionService } from '@core/services/session.service';

@Injectable({ providedIn: 'root' })
export class LoginUseCase {
  constructor(private repo: AuthRepository, private session: SessionService) {}
  exec(dto: LoginDTO) { return this.repo.login(dto).pipe(tap(r => this.session.start(r.user, r.tokens))); }
}

@Injectable({ providedIn: 'root' })
export class RegisterUseCase {
  constructor(private repo: AuthRepository, private session: SessionService) {}
  exec(dto: RegisterDTO) { return this.repo.register(dto).pipe(tap(r => this.session.start(r.user, r.tokens))); }
}
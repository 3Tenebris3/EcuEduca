// src/app/core/guards/no-auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si está autenticado, redirige a "/"
  if (authService.isAuthenticated()) {
    router.navigate(['/']);
    return false;
  }
  // Si NO está autenticado, permite acceso
  return true;
};

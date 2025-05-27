import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SessionService } from "@core/services/session.service";

// src/app/core/guards/auth.guard.ts
export const authGuard: CanActivateFn = (route, state) => {
  const session = inject(SessionService);
  const router  = inject(Router);

  if (!session.isAuth) { router.navigate(['/login']); return false; }

  /* Siempre permitimos /dashboard, incluso si el rol aún es desconocido */
  if (state.url.startsWith('/dashboard')) return true;

  const allowed = perms(session.role ?? '');          // función switch(role)
  if (!allowed.includes(state.url)) {
    router.navigate(['/error']);
    return false;
  }
  return true;
};


function perms(role: string) {
  switch (role) {
    case 'admin':   return ['/', '/dashboard', '/admin'];
    case 'teacher': return ['/', '/dashboard', '/teacher'];
    case 'student': return ['/', '/dashboard', '/student'];
    case 'parent':  return ['/', '/dashboard'];
    default:        return ['/', '/dashboard'];
  }
}

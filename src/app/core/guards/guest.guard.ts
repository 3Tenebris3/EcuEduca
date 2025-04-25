import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SessionService } from "@core/services/session.service";

export const guestGuard: CanActivateFn = () => {
  const s = inject(SessionService); const r = inject(Router);
  if (s.isAuth) { r.navigate(['/']); return false; }
  return true;
};

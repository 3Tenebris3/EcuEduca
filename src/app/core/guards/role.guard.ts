import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '@core/services/session.service';
import { Role } from '@core/models/role.enum';

@Injectable({ providedIn: 'root' })
export class RoleGuard {
  constructor(private session: SessionService, private router: Router) {}

  canActivate(roles: Role[]): CanActivateFn {
    return () => {
      if (roles.includes(this.session.role as Role)) { return true; }
      this.router.navigate(['/dashboard']);
      return false;
    };
  }
}
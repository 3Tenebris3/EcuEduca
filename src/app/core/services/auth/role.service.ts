// src/app/core/services/auth/role.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RoleService {
  // Ejemplo: en un escenario real, se obtendría de tu JWT o tu backend
  public currentUserRoles: string[] = ['teacher']; 

  hasRole(role: string): boolean {
    return this.currentUserRoles.includes(role);
  }
}

// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard }  from '@core/guards/auth.guard';
import { guestGuard } from '@core/guards/guest.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../presentation/pages/auth/auth-ui.module')
        .then(m => m.AuthUiModule),
    canActivate: [guestGuard]
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('../presentation/pages/dashboard/dashboard-ui.module')
        .then(m => m.DashboardUiModule),
    canActivate: [authGuard]
  },

  /* Ruta 404 */
  {
    path: 'error',
    loadComponent: () =>
      import('../presentation/pages/not-found/not-found.component')
        .then(c => c.NotFoundComponent)
  },

  /* catch‑all */
  { path: '**', redirectTo: 'error' }
];

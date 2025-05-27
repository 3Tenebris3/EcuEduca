// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard }  from '@core/guards/auth.guard';

export const APP_ROUTES: Routes = [
  { path: 'auth',      loadChildren: () => import('@pages/auth/auth-ui.routes').then(m => m.default) },
  { path: 'dashboard', loadChildren: () => import('@pages/dashboard/dashboard.routes').then(m => m.dashboardRoutes) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

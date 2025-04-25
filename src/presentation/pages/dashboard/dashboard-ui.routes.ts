// dashboard-ui.routes.ts
import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/overview.component').then((c) => c.OverviewComponent),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../admin/users/users-ui.routes').then((r) => r.usersUiRoutes),
      },
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
    ],
  },
];

// dashboard-ui.routes.ts
import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'home', loadComponent: () => import('@features/home/home-dashboard.component').then(m => m.HomeDashboardComponent) },
      {
        path: 'users',
        loadChildren: () =>
          import('../admin/users/users-ui.routes').then((r) => r.usersUiRoutes),
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];

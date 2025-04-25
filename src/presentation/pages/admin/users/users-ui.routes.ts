// presentation/pages/admin/users/users-ui.routes.ts
import { Routes } from '@angular/router';
import { UsersTableComponent } from './users-table.component';

export const usersUiRoutes: Routes = [
  { path: '', component: UsersTableComponent }   // /admin/users
];

// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/pages/home/home.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [noAuthGuard], 
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '' }
];

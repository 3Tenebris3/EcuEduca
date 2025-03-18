// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';
import { HomeComponent } from './presentation/pages/home/home.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { NotFoundComponent } from './presentation/pages/not-found/not-found.component';

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
  { path: '**', component: NotFoundComponent } // último
];

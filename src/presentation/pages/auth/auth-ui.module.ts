// src/presentation/pages/auth/auth-ui.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login-register/login.component';

@NgModule({
  imports: [
    LoginComponent,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ]
})
export class AuthUiModule {}

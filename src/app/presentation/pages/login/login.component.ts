// src/app/presentation/pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUseCase } from '../../../domain/use-cases/auth/login.use-case';
import { LoginPayload } from '../../../domain/models/auth/login-payload.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private loginUseCase: LoginUseCase,
    private router: Router
  ) {}

  onSubmit() {
    const payload: LoginPayload = {
      email: this.email,
      password: this.password,
    };
    this.loginUseCase.execute(payload).subscribe({
      next: res => {
        this.router.navigate(['/']);
      },
      error: err => {
        this.errorMessage = 'Error en login: ' + err.message;
      }
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { LoginUseCase, RegisterUseCase } from '@features/auth/application/auth.use-case';
import { UiModule } from '@shared/ui/ui.module';

@Component({
  standalone: true,                              // ✔ si usas standalone
  selector: 'app-login-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule,
    RouterModule
  ]
})
export class LoginComponent {
  isLoginMode = true;
  loading = false;
  errorMsg: string | null = null;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginUC: LoginUseCase,
    private registerUC: RegisterUseCase,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      displayName: ['']            // requerido sólo para registro
    });
  }

  /** Cambia entre Login y Registro */
  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.form.get('displayName')?.reset();
  }

  /** Enviar al backend */
  submit(): void {
    if (this.form.invalid) return;

    this.loading = true;
    const { email, password, displayName } = this.form.value;

    const obs$ = this.isLoginMode
      ? this.loginUC.exec({ email, password })
      : this.registerUC.exec({ email, password, displayName, role: 'teacher' /* ó admin*/ });

    obs$.subscribe({
      next: () => {
        this.loading = false;
        // -> Luego el guard de roles redirige al módulo correcto
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.loading = false;
        this.errorMsg = err?.error?.message ?? 'Algo salió mal';
        console.error(err);
      }
    });
  }
}
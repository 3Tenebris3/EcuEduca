import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { SessionService } from '@core/services/session.service';
import { LoginUseCase, RegisterUseCase }  from '@features/auth/application/auth.use-case';
import { AuthModule } from '@features/auth/auth.module';
import { UiModule } from '@shared/ui/ui.module';

@Component({
  selector: 'app-login-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule,
    RouterModule,
    AuthModule
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
    private session: SessionService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      displayName: ['']                // requerido solo al registrar
    });
  }

  /** Cambia entre Login y Registro */
  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.form.get('displayName')?.reset();
  }

  /** Envía datos al backend */
  submit() {
    if (this.form.invalid) return;
    this.loading = true;
  
    const { email, password, displayName } = this.form.value;
    const obs$ = this.isLoginMode
        ? this.loginUC.exec({ email, password })
        : this.registerUC.exec({ email, password, displayName, role: 'student' });
  
    obs$.subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(
          this.isLoginMode ? ['/dashboard'] : ['/login']
        );
      },
      error: e => { this.loading=false; this.errorMsg='Error'; console.error(e); }
    });
  }
  

  /** Redirige según rol guardado en sesión */
  private redirectByRole(): void {
    const r = this.session.role;
    const dest =
      r === 'admin'   ? '/admin'   :
      r === 'teacher' ? '/teacher' :
      r === 'student' ? '/student' : '/dashboard';

    this.router.navigate([dest]);
  }
}

// src/app/app.component.ts
import { Component } from '@angular/core';
import { SessionService } from '../app/core/services/session.service'; // Adjust the path as needed
import { GetProfileUseCase } from '../app/features/auth/application/auth.use-case'; // Adjust the path as needed

@Component({
  standalone: false,
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(
    private session: SessionService,
    private getProfileUC: GetProfileUseCase
  ) {}

  ngOnInit() {
    if (this.session.isAuth && !this.session.user) {
      this.getProfileUC.exec().subscribe(); // carga perfil silencioso
    }
  }
}

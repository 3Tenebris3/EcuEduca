import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SessionService } from '@core/services/session.service';

@Component({
  standalone: true, 
  selector: 'app-not-found',
  template: `
    <mat-card class="center">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <button mat-raised-button color="primary" (click)="goHome()">
        Ir al inicio
      </button>
    </mat-card>
  `,
  styles: [
    `
      .center {
        margin: 10vh auto;
        max-width: 320px;
        text-align: center;
      }
    `,
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class NotFoundComponent {
  constructor(private router: Router, private session: SessionService) {}
  goHome() {
    const target = this.session ? '/dashboard' : '/login';
    this.router.navigate([target]);
  }
}

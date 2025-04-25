import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-overview',
  template: `
    <div class="cards-grid">
      <mat-card class="stat">
        <mat-icon class="icon">group</mat-icon>
        <h3>Usuarios</h3>
        <p>120 registrados</p>
      </mat-card>

      <mat-card class="stat">
        <mat-icon class="icon">school</mat-icon>
        <h3>Clases activas</h3>
        <p>8 en curso</p>
      </mat-card>

      <mat-card class="stat">
        <mat-icon class="icon">emoji_events</mat-icon>
        <h3>Minijuegos jugados</h3>
        <p>542 partidas</p>
      </mat-card>
    </div>
  `,
  styles: [`
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.5rem;
    }
    .stat {
      text-align: center;
      padding: 1.5rem;
    }
    .stat .icon {
      font-size: 48px;
      color: #3f51b5;
    }
  `],
  imports: [MatCardModule, MatIconModule]
})
export class OverviewComponent {}

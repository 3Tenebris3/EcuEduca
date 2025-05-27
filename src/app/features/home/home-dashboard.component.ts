import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

import { SessionService } from '@core/services/session.service';

interface StatCard {
  label: string;
  subtitle: string;
  icon: string;       // Material Symbols name
  route: string;
  color: string;      // Tailwind/Material hex
}

@Component({
  standalone: true,
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
  imports: [CommonModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDashboardComponent {
  private router  = inject(Router);
  private session = inject(SessionService);

  userName = this.session.user?.displayName ?? 'Usuario';
  constructor() {
    console.log('Session user:', this.session.user);
  }
  cards: StatCard[] = [
    { label: 'Usuarios',        subtitle: '120 registrados',  icon: 'group',        route: '/dashboard/users',   color: '#4F46E5' },
    { label: 'Clases activas',  subtitle: '8 en curso',       icon: 'school',       route: '/dashboard/classes', color: '#10B981' },
    { label: 'Minijuegos',      subtitle: '542 partidas',     icon: 'sports_esports',route: '/dashboard/quizzes', color: '#F59E0B' }
  ];

  go(card: StatCard) { this.router.navigate([card.route]); }
}
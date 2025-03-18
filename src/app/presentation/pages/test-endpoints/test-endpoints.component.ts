// src/app/presentation/pages/test-endpoints/test-endpoints.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/http/api.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-test-endpoints',
  templateUrl: './test-endpoints.component.html',
  styleUrls: ['./test-endpoints.component.scss'],
  providers: [ApiService]
})
export class TestEndpointsComponent {
  data: any;
  error: string = '';

  constructor(private api: ApiService) {}

  testGet() {
    // Llamada ficticia a "users"
    this.api.get<any>('users')
      .subscribe({
        next: (res) => this.data = res,
        error: (err) => this.error = err.message
      });
  }

  testPost() {
    // Llamada ficticia a "users" con body
    this.api.post<any>('users', { name: 'Juan' })
      .subscribe({
        next: (res) => this.data = res,
        error: (err) => this.error = err.message
      });
  }
}

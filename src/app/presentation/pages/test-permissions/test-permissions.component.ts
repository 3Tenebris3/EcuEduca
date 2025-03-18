// src/app/presentation/pages/test-permissions/test-permissions.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-test-permissions',
  templateUrl: './test-permissions.component.html',
  styleUrls: ['./test-permissions.component.scss']
})
export class TestPermissionsComponent {
  // Ejemplo simple, ni siquiera hace nada
  message: string = '¡Bienvenido! Solo usuarios autenticados deben ver esto.';
}

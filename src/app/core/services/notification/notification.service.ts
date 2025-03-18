import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Servicio para mostrar notificaciones (SnackBars) usando Angular Material.
 * Ofrece métodos de éxito, error y advertencia, con estilos personalizables.
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private defaultDuration = 3000; // duración por defecto de 3 seg

  constructor(private snackBar: MatSnackBar) {}

  /**
   * Muestra un snackbar verde indicando éxito.
   * @param message Mensaje a mostrar en el snackbar.
   */
  showSuccess(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: this.defaultDuration,
      panelClass: ['snackbar-success'] 
    });
  }

  /**
   * Muestra un snackbar rojo indicando error.
   * @param message Mensaje a mostrar en el snackbar.
   */
  showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: this.defaultDuration,
      panelClass: ['snackbar-error']
    });
  }

  /**
   * Muestra un snackbar con color de advertencia (naranja).
   * @param message Mensaje a mostrar en el snackbar.
   */
  showWarning(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: this.defaultDuration,
      panelClass: ['snackbar-warning']
    });
  }
}

// src/app/core/interceptors/global-error.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
// Ejemplo: si usas un servicio de notificaciones o toasts
import { NotificationService } from '../services/notification/notification.service'; 
// O tu AuthService, si quieres forzar logout
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class GlobalErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private notificationService: NotificationService, // Opcional
    private authService: AuthService                  // Opcional
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error('Global HTTP error:', err.message);

        if (err.status === 401) {
          // 1. Redirigir al login:
          this.router.navigate(['/login']);
          // 2. O forzar logout (si se requiere borrar token):
          this.authService.logout();
          // 3. Mostrar un mensaje emergente:
          this.notificationService.showError('Sesion expirada, por favor inicia sesión de nuevo.');
        } 
        else if (err.status === 404) {
          // 1. Navegar a una pantalla de 404:
          this.router.navigate(['/not-found']);
          // 2. O mostrar un toast:
          this.notificationService.showWarning('Recurso no encontrado.');
        } 
        else if (err.status === 500) {
          // 1. Mostrar un mensaje de error global:
          this.notificationService.showError('Error interno del servidor. Intenta más tarde.');
          // 2. Registrar el error en un servicio de logging, si quieres:
          // this.loggerService.logError(err);
        } 
        else {
          // Otros status codes no manejados explícitamente
          this.notificationService.showError(`Error inesperado: ${err.statusText}`);
        }

        // Siempre es bueno relanzar el error para que quien lo consuma pueda manejarlo también
        return throwError(() => err);
      })
    );
  }
}

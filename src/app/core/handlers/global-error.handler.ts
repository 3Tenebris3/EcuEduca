// src/app/core/handlers/global-error.handler.ts
import { ErrorHandler, Injectable, NgZone } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private ngZone: NgZone) {}

  handleError(error: any): void {
    // Manejo centralizado del error (logs, alertas, etc.)
    console.error('Global Error Caught:', error);

    // Podrías mostrar un toast o un modal
    // Para asegurarte de ejecutar en el context de Angular:
    this.ngZone.run(() => {
      // ... Lógica de UI
    });
  }
}

// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { CoreModule } from './core/core.module';
import { ApiModule }  from './api/api.module';
import { UiModule }   from './shared/ui/ui.module';

import { AppComponent } from './app.component';   // stand‑alone

@NgModule({
  declarations: [AppComponent],          // ① ahora va en declarations
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    ApiModule,
    UiModule
  ],
  bootstrap: [AppComponent]  
})
export class AppModule {}

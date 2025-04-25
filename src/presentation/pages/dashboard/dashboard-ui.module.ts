// dashboard-ui.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { dashboardRoutes } from './dashboard-ui.routes';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

@NgModule({
  imports: [
    DashboardLayoutComponent,          // standalone import
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardUiModule {}

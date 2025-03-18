// src/app/core/directives/has-role.directive.ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RoleService } from './role.service';

@Directive({
  selector: '[hasRole]',
  standalone: true
})
export class HasRoleDirective {
  private roleRequired: string | null = null;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private roleService: RoleService
  ) {}

  @Input() set hasRole(role: string) {
    this.roleRequired = role;
    this.updateView();
  }

  private updateView(): void {
    this.viewContainer.clear();
    if (this.roleRequired && this.roleService.hasRole(this.roleRequired)) {
      // Muestra la plantilla
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}

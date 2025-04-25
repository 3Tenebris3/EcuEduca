import { Component, inject, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { UserModel } from '@features/users/domain/user.dto';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  standalone: true,
  templateUrl: './user-dialog.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class UserDialogComponent {
  private fb = inject(FormBuilder); // ← ya está disponible

  form = this.fb.group({
    displayName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserModel | null,
    private ref: MatDialogRef<UserDialogComponent>
  ) {
    if (data)
      this.form.patchValue({
        displayName: data.displayName,
        email: data.email,
        role: data.roles[0],
      });
  }

  save() {
    if (this.form.invalid) return;
    this.ref.close(this.form.value);
  }
}

import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule }   from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }  from '@angular/material/input';
import { MatDialog }       from '@angular/material/dialog';
import { FormsModule }     from '@angular/forms';

import { UserModel } from '@features/users/domain/user.dto';
import { CreateUserUseCase, DeleteUserUseCase, GetUsersUseCase, UpdateUserUseCase }   from '@features/users/application/user.use-case';
import { UserDialogComponent } from './user-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  imports: [
    CommonModule,
    MatTableModule, MatPaginatorModule, MatIconModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule,
    UserDialogComponent
  ]
})
export class UsersTableComponent {
    private getUC    = inject(GetUsersUseCase);
    private createUC = inject(CreateUserUseCase);
    private updateUC = inject(UpdateUserUseCase);
    private deleteUC = inject(DeleteUserUseCase);
    private dialog   = inject(MatDialog);
    private snack    = inject(MatSnackBar);
  
    displayed  = ['displayName', 'email', 'roles', 'actions'];
    dataSource = new MatTableDataSource<UserModel>([]);
  
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
    constructor() {
      this.loadData();
      /* filtrar por nombre o email */
      this.dataSource.filterPredicate = (u, term) =>
        u.displayName.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term);
    }
  
    /* ---------- helpers ---------- */
    loadData(): void {
      this.getUC.exec().subscribe(users => {
        this.dataSource.data = users;
        this.dataSource.paginator = this.paginator;
      });
    }
  
    applyFilter(value: string): void {
      this.dataSource.filter = value.trim().toLowerCase();
      if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
    }
  
    openDialog(user?: UserModel): void {
      const ref = this.dialog.open(UserDialogComponent, {
        width: '400px',
        data: user ?? null
      });
  
      ref.afterClosed().subscribe((dto?: Partial<UserModel>) => {
        if (!dto) return;
  
        const op$ = user
          ? this.updateUC.exec(user.id, dto)
          : this.createUC.exec(dto);
  
        op$.subscribe({
          next: () => {
            this.snack.open('Guardado', '', { duration: 2000 });
            this.loadData();
          },
          error: () => this.snack.open('Error', '', { duration: 2000 })
        });
      });
    }
  
    deleteUser(user: UserModel): void {
      const ok = confirm(`¿Eliminar a ${user.displayName}?`);
      if (!ok) return;
  
      this.deleteUC.exec(user.id).subscribe({
        next: () => { this.snack.open('Eliminado', '', { duration: 2000 }); this.loadData(); },
        error: () => this.snack.open('Error al eliminar', '', { duration: 2000 })
      });
    }
  }

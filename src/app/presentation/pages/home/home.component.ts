// src/app/presentation/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllUsersUseCase } from '../../../domain/use-cases/users/get-all-users.use-case';
import { User } from '../../../domain/models/users/user.model';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private getAllUsersUseCase: GetAllUsersUseCase) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.getAllUsersUseCase.execute().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error al obtener usuarios', err);
      }
    });
  }
}

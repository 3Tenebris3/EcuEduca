// src/app/infrastructure/repositories/user.repository.ts
import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/http/api.service';
import { Observable } from 'rxjs';
import { User } from '../../../domain/models/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {
  private endpoint = 'users';

  constructor(private api: ApiService) {}

  getAllUsers(): Observable<User[]> {
    // GET /users
    return this.api.get<User[]>(this.endpoint);
  }

  // Podrías agregar otros métodos: getUserById, createUser, etc.
}

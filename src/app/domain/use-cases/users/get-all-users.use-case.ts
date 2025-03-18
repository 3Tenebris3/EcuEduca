// src/app/domain/use-cases/users/get-all-users.use-case.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/users/user.model';
import { UserRepository } from '../../../infrastructure/repositories/users/user.repository';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersUseCase {
  // Este use-case depende del UserRepository para obtener los datos
  constructor(private userRepo: UserRepository) {}

  execute(): Observable<User[]> {
    // Lógica de negocio adicional aquí (validaciones, transformaciones, etc.)
    return this.userRepo.getAllUsers();
  }
}

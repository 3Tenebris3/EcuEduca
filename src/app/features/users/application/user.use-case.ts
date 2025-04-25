import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { UserRepository } from "../data/user.repository";

// application/get-users.use-case.ts
@Injectable({ providedIn: 'root' })
export class GetUsersUseCase {
  constructor(private repo: UserRepository) {}
  exec() { return this.repo.list().pipe(map(r => r.data)); }
}

// application/get-user.use-case.ts
@Injectable({ providedIn: 'root' })
export class GetUserUseCase {
  constructor(private repo: UserRepository) {}
  exec(id: string) { return this.repo.get(id).pipe(map(r => r.data)); }
}

// application/create-user.use-case.ts
@Injectable({ providedIn: 'root' })
export class CreateUserUseCase {
  constructor(private repo: UserRepository) {}
  exec(dto: any) { return this.repo.create(dto).pipe(map(r => r.data)); }
}

// application/update-user.use-case.ts
@Injectable({ providedIn: 'root' })
export class UpdateUserUseCase {
  constructor(private repo: UserRepository) {}
  exec(id:string,dto:any){return this.repo.update(id,dto).pipe(map(r=>r.data));}
}

// application/delete-user.use-case.ts
@Injectable({ providedIn: 'root' })
export class DeleteUserUseCase {
  constructor(private repo: UserRepository) {}
  exec(id: string) { return this.repo.delete(id).pipe(map(r => r.data)); }
}

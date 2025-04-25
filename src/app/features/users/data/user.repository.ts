import { Injectable } from "@angular/core";
import { ApiService } from "@api/api.service";
import { UserModel } from "../domain/user.dto";

// data/user.repository.ts
@Injectable({ providedIn: 'root' })
export class UserRepository {
  constructor(private api: ApiService) {}

  list()             { return this.api.get<{ data: UserModel[] }>('/users'); }
  get(id: string)    { return this.api.get<{ data: UserModel }>(`/users/${id}`); }
  create(dto: any)   { return this.api.post<{ data: UserModel }>('/users', dto); }
  update(id: string, dto:any) {
                     return this.api.put<{ data: UserModel }>(`/users/${id}`, dto); }
  delete(id: string) { return this.api.delete<{ data: boolean }>(`/users/${id}`); }

  me()               { return this.api.get<{ data: UserModel }>('/users/me'); }
}

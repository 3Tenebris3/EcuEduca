import { Inject, Injectable } from "@angular/core";
import { ApiService } from "@api/api.service";
import { LoginDTO, RegisterDTO, UserModel } from "../domain/auth.dto";

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  constructor(@Inject(ApiService) private api: ApiService) {}
  login(dto: LoginDTO)         { return this.api.post('/auth/login', dto); }
  register(dto: RegisterDTO)   { return this.api.post('/auth/register', dto); }
  logout()                     { return this.api.post('/auth/logout', {}); }
  getProfile()                    { return this.api.get<{ data: UserModel }>('/users/me'); }
}

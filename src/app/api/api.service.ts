import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { SessionService } from "../core/services/session.service";

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiUrl;
  constructor(private http: HttpClient, private session: SessionService) {}

  private opts(h?: HttpHeaders) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    if (this.session.token) headers = headers.set('Authorization', `Bearer ${this.session.token}`);
    if (h) {
      h.keys().forEach(key => {
        headers = headers.append(key, h.get(key) || '');
      });
    }
    return { headers };
  }
  get <T>(u: string, p?: any) { return this.http.get<T >(this.base+u,{...this.opts(), params:p}); }
  post<T>(u: string, b:any)   { return this.http.post<T>(this.base+u, b, this.opts()); }
  put <T>(u: string, b:any)   { return this.http.put <T>(this.base+u, b, this.opts()); }
  delete<T>(u: string)        { return this.http.delete<T>(this.base+u,     this.opts()); }
}

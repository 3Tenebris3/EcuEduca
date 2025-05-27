import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionService } from '../core/services/session.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiUrl;
  constructor(private http: HttpClient, private session: SessionService) {}

  private opts(h?: HttpHeaders) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (this.session.token)
      headers = headers.set('Authorization', `Bearer ${this.session.token}`);
    if (h) {
      h.keys().forEach((key) => {
        headers = headers.append(key, h.get(key) || '');
      });
    }
    return { headers };
  }

  get<T>(u: string, p?: any) {
    const url = this.base + u;
    console.log('GET Request:', { url, params: p });
    return this.http.get<T>(url, { ...this.opts(), params: p }).pipe(
      tap(response => console.log('GET Response:', response))
    );
  }

  post<T>(u: string, body: any, h?: HttpHeaders) {
    const url = this.base + u;
    console.log('POST Request:', { url, body });
    return this.http.post<T>(url, body, this.opts(h)).pipe(
      tap(response => console.log('POST Response:', response))
    );
  }

  put<T>(u: string, b: any) {
    const url = this.base + u;
    console.log('PUT Request:', { url, body: b });
    return this.http.put<T>(url, b, this.opts()).pipe(
      tap(response => console.log('PUT Response:', response))
    );
  }

  delete<T>(u: string) {
    const url = this.base + u;
    console.log('DELETE Request:', { url });
    return this.http.delete<T>(url, this.opts()).pipe(
      tap(response => console.log('DELETE Response:', response))
    );
  }
}

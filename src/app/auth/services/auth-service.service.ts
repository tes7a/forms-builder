import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import { APIService } from '../../api/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private apiService: APIService) {
  }

  login(email: string, password: string) {
    return this.apiService.login(email, password).pipe(
      tap((res: any) => {
        localStorage.setItem('auth', res.accessToken);
      }),
    );
  }

  onSetData() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('auth')}`,
    });

    return this.http.get('http://localhost:3000/posts', { headers });
  }
}

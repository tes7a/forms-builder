import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { APIService } from '../../api/api-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private apiService: APIService) {}

  login(email: string, password: string) {
    return this.apiService.login(email, password).pipe(
      tap((res: any) => {
        localStorage.setItem('auth', res.accessToken);
        this._isLoggedIn$.next(true);
      }),
    );
  }

  onSetData() {
    return this.http.get('http://localhost:3000/posts');
  }
}

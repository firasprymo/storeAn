import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'environments/environment';
import { User } from 'app/auth/models';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient, private authenticationService: AuthenticationService) {}

  /**
   * Get all users
   */
  getAll() {
    return this._http.get<User[]>(`${environment.apiUrl}/users`);
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<User>(`${environment.apiUrl}/users/${id}`);
  }


 /* getMe(): Observable<User> {
    const token = this.authenticationService.currentUserValue.token;
    console.log('Token:', token);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this._http.get<User>(`${environment.apiUrl}/Users/me`, { headers });
  }*/

  getMe(): Observable<User> {
    return this._http.get<User>(`${environment.apiUrl}/Users/me`).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      }),
      tap((response) => console.log(response))
    );
  }

  updatePassword(currentPassword: string, newPassword: string): Observable<any> {
    const body = {
      currentPassword,
      newPassword
    };
    return this._http.put(`${environment.apiUrl}/Users/me`, body);
  }
}

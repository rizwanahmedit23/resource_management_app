// role.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private readonly baseUrl = 'http://localhost:8080'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getUserRole(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/api/auth/user-role`);
  }
}

// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../login/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  public setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }
  
  private baseUrl = 'http://localhost:8080/api/auth'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  getUserRole(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/api/auth/user-role`);
  }
  private user: any; // You can replace 'any' with a proper User interface

  setUser(user: any): void {
    this.user = user;
    this.setCurrentUser(user)
  }

  getUser(): any {
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  hasRole(role: string): boolean {
    return this.isAuthenticated() && this.user.role === role;
  }

  // You may want to add other authentication-related methods like logout, token validation, etc.
}

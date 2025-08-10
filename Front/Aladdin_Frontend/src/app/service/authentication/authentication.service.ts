import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRole } from '../../data/roles';
import { jwtDecode } from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/login'; 
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}


  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  isTokenExpired(token: string): boolean {
    if (!token) return true;
    const decodedToken: any = jwtDecode(token);
    const currentTime = Date.now() / 1000; 
    return decodedToken.exp < currentTime;
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (token) {
    const decodedToken: any = jwtDecode(token);

  
    return decodedToken.role === UserRole.ADMIN
    }
    return false;
  }

}

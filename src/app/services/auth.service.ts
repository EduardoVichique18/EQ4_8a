import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/api';
  private tokenKey = 'authToken';
  private adminKey = 'currentAdmin';

  constructor(private http: HttpClient, private router: Router) {}

  // Headers comunes
  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    });
  }

  // 🔹 Iniciar sesión
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response: any) => {
        if (response.token && response.admin) {
          this.saveAuthData(response.token, response.admin);
        }
      })
    );
  }

  // 🔹 Registrar Administrador
  registerAdmin(email: string, username: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, username, password, role });
  }

  // 🔹 Guardar datos de autenticación
  private saveAuthData(token: string, admin: any): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.adminKey, JSON.stringify(admin));
  }

  // 🔹 Obtener token almacenado
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // 🔹 Obtener información del admin autenticado
  getCurrentAdmin(): any {
    const adminData = localStorage.getItem(this.adminKey);
    return adminData ? JSON.parse(adminData) : null;
  }

  // 🔹 Verificar si está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // 🔹 Cerrar sesión
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.adminKey);
    this.router.navigate(['/login']);
  }

  // 🔹 Obtener perfil del administrador (ruta protegida)
  getAdminProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/profile`, { headers: this.getHeaders() });
  }
}
// src/app/services/servicios.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = 'http://localhost:5000/api/servicios'; // URL de tu API

  constructor(private http: HttpClient) { }

  getServicios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRestaurantes() {
    return this.http.get(`${this.baseUrl}/restaurantes`);
  }

  criarRestaurante(restaurante: any) {
    return this.http.post(`${this.baseUrl}/restaurantes`, restaurante);
  }

  excluirRestaurante(restaurante: any) {
    return this.http.delete(`${this.baseUrl}/restaurantes`, { body: restaurante });
  }
}
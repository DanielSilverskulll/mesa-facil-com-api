import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get(`${this.baseUrl}/usuario`);
  }

  criarUsuario(usuario: any) {
    return this.http.post(`${this.baseUrl}/usuario`, usuario);
  }

  excluirUsuario(usuario: any) {
    return this.http.delete(`${this.baseUrl}/usuario`, { body: usuario });
  }
}
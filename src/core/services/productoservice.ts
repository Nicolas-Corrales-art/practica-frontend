import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Productoservice {
  private base = 'http://127.0.0.1:8000/api/productos';

  constructor(private http: HttpClient) {}

  listaProducto(): Observable<any[]> {
    return this.http.get<any[]>(this.base);
  }

  crearProducto(data: any): Observable<any> {
    return this.http.post<any>(this.base, data);
  }
}

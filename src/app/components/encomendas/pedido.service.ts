import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private readonly API = 'https://localhost:7268/Pedido';

  constructor(private http: HttpClient) {}

  realizaPedido(pedido: Pedido): Observable<Pedido> {
    console.log(JSON.stringify(pedido));
    return this.http.post<Pedido>(this.API, JSON.stringify(pedido), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from './itemPedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private readonly API = 'https://localhost:7268/ItemPedido';

  constructor(private http: HttpClient) {}

  listOrder(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.API);
  }

  addItemToOrder(orderItem: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(this.API, orderItem);
  }

  removeItem(itemId: any) {
    return this.http.delete(`${this.API}/${itemId}`);
  }
}

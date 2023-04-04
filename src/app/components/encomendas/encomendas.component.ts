import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { OrderItem } from './itemPedido';
import { Router } from '@angular/router';
@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css'],
})
export class EncomendasComponent implements OnInit {
  orderItem: OrderItem = {
    tipo: 'Caseiro',
    sabor: 'Laranja',
    tamanho: 20,
  };

  order: OrderItem[] = [];

  constructor(private service: PedidoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listOrder().subscribe((order) => {
      this.order = order;
    });
  }

  addProduct() {
    this.service.addItemToOrder(this.orderItem).subscribe(() => {
      this.router.navigate(['/encomendas']);
    });
  }
}

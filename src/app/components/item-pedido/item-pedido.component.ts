import { PedidoService } from './../encomendas/pedido.service';
import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from '../encomendas/itemPedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css'],
})
export class ItemPedidoComponent implements OnInit {
  @Input() orderItem: OrderItem = {
    id: 0,
    tipo: 'Caseiro',
    sabor: 'Limão',
    tamanho: 30,
  };

  constructor(private service: PedidoService, private router: Router) {}

  ngOnInit(): void {}

  removeProduct(event: any, id: any) {
    this.service.removeItem(id).subscribe(() => {
      this.router.navigate(['/encomendas']);
    });
    event.target.parentElement.remove();
  }
}

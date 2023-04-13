import { PedidoService } from './../encomendas/pedido.service';
import { Component, Input, OnInit } from '@angular/core';
import { ItemPedido } from '../encomendas/itemPedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css'],
})
export class ItemPedidoComponent implements OnInit {
  @Input() itemPedido: ItemPedido = {
    id: 0,
    tipo: '',
    sabor: '',
    tamanho: 0,
  };

  constructor(private service: PedidoService, private router: Router) {}

  ngOnInit(): void {}

  removeProduto(event: any, id: any) {
    sessionStorage.removeItem(id);
    event.target.parentElement.remove();
  }
}

import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { ItemPedido } from './itemPedido';
import { Cliente } from './cliente';
import { Pedido } from './pedido';
import { Router } from '@angular/router';
@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.css'],
})
export class EncomendasComponent implements OnInit {
  itemPedido: ItemPedido = {
    id: 0,
    tipo: '',
    sabor: '',
    tamanho: 0,
  };
  cliente: Cliente = {
    nome: '',
    telefone: '',
    email: '',
  };

  quantidadePedidos: number = 0;
  pedido: Pedido = {
    cliente: {
      nome: '',
      telefone: '',
      email: '',
    },
    itensPedido: [],
  };

  constructor(private service: PedidoService, private router: Router) {}

  ngOnInit(): void {
    sessionStorage.clear();
  }

  adicionaProduto(quantidade: number) {
    this.quantidadePedidos = quantidade + 1;
    this.itemPedido.id = this.quantidadePedidos;
    sessionStorage.setItem(
      `${this.quantidadePedidos}`,
      JSON.stringify(this.itemPedido)
    );
    this.pedido.itensPedido.push(
      JSON.parse(sessionStorage.getItem(`${this.quantidadePedidos}`) || '')
    );
  }

  registraPedido() {
    this.pedido.itensPedido = [];
    Object.keys(sessionStorage).forEach((id) => {
      this.pedido.itensPedido.push(
        JSON.parse(sessionStorage.getItem(id) || '')
      );
    });
    console.log(this.pedido);
    this.service.realizaPedido(this.pedido).subscribe(() => {
      this.router.navigate(['/confirmacao']);
    });
    sessionStorage.clear();
  }
}

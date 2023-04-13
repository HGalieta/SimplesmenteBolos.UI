import { Cliente } from './cliente';
import { ItemPedido } from './itemPedido';

export interface Pedido {
  cliente: Cliente;
  itensPedido: ItemPedido[];
}

import { Cliente } from './cadastro/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTE = "_CLIENTE";

  constructor() { }

  salvar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTE, JSON.stringify(storage))
  }

  pesquisarCliente(nomeBusca: string): Cliente[] {
    const clientes = this.obterStorage();

    if (!nomeBusca) {
      return clientes;
    }

    const buscaNormalizada = nomeBusca.toLowerCase();

    return clientes.filter(cliente =>
      cliente.nome?.toLowerCase().includes(buscaNormalizada)
    );
  }

  obterStorage(): Cliente[] {
    const repositorioCliente = localStorage.getItem(ClienteService.REPO_CLIENTE);

    if (repositorioCliente) {
      const cliente: Cliente[] = JSON.parse(repositorioCliente);
      return cliente;
    }

    const cliente: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTE, JSON.stringify(cliente));
    return cliente;
  }
}

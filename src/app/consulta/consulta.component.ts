import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  imports: [MatTableModule, MatInputModule, MatCardModule, FlexLayoutModule,  MatIconModule, FormsModule, MatButtonModule, CommonModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  nomeBusca: string = '';
  listaCliente: Cliente[] = [];
  colunasTable: string[] = ['id', 'nome', 'email', 'cpf', 'dataAniver', 'acoes' ];
  displayedColumns: string[] = this.colunasTable;

  constructor(
    private service: ClienteService,
    private router: Router
  ){ }

  ngOnInit(){
    this.listaCliente = this.service.pesquisarCliente('');
  }

  pesquisar(){
   this.listaCliente = this.service.pesquisarCliente(this.nomeBusca);
  }

  preparaEditar(id: string){
    this.router.navigate(['/cadastro'], {queryParams: {"id" : id}})
  }

}

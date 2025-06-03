import { Component, importProvidersFrom } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
 

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule,
     MatCardModule, 
     FormsModule, 
     MatFormFieldModule, 
     MatInputModule,
    MatButtonModule,
    MatIconModule,
    ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  cliente: Cliente = Cliente.newCliente();

 constructor(private service: ClienteService){ }

  cadastraCliente(){
    this.service.salvar(this.cliente);
  }

  limparCliente(form: any){
    form.resetForm();
  }

}

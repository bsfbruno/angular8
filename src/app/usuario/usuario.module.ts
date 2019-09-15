import { UsuarioRoutingModule } from './usuario.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
  declarations: [UsuarioComponent, CadastroComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ]
})
export class UsuarioModule { }

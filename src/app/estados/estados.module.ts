import { EstadosComponent } from './estados.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoRoutingModule } from './estado.routing.module';

@NgModule({
  declarations: [EstadosComponent],
  imports: [
    CommonModule,
    EstadoRoutingModule
  ]
})
export class EstadosModule { }

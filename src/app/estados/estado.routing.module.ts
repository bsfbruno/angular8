import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EstadosComponent } from './estados.component';

const routes: Routes = [
    { 
      path: '', 
      component: EstadosComponent
    }
  ];
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
  export class EstadoRoutingModule { }
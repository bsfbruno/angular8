import { UsuarioComponent } from './usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { 
    path: '', 
    component: UsuarioComponent
  },
  { 
    path: 'add', 
    component: CadastroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class UsuarioRoutingModule { }
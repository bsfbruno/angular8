import { Usuario } from './usuario.domain';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ ConfirmationService ]
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;
  public usuarios: Usuario[];

  constructor(
    private usuarioService: UsuarioService,
    private confirmationService: ConfirmationService
    ) { }  

  ngOnInit() {
    this.listaUsuario();
  }

  public listaUsuario() {
    //this.usuarioService.listar().subscribe(
    //response => {
    //  this.usuarios = response;
    //});

    this.usuario = this.usuarioService.getUsuario();
    this.usuarios = this.usuarioService.listaUsuario();
  }

  public deletar(id: string) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.usuarioService.delete(id).subscribe(
          response => {
            this.listaUsuario();
          }
        );
      }
    });
  }
}

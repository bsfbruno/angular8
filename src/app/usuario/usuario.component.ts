import { Usuario } from './usuario.domain';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;
  public usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }  

  ngOnInit() {
    //this.usuarioService.listar().subscribe(
    //response => {
    //  this.usuarios = response;
    //});

    this.usuario = this.usuarioService.getUsuario();
    this.usuarios = this.usuarioService.listaUsuario();
  }

}

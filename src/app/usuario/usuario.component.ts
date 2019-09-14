import { Usuario } from './usuario.domain';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  public usuario: Usuario;

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
  }

}

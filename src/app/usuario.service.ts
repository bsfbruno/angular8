import { Usuario } from './usuario/usuario.domain';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario();
    usuario.nome = "User";
    usuario.email = "user@gmail.com";

    return usuario;
  }
}

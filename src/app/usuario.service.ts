import { Usuario } from './usuario/usuario.domain';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuario'

  constructor(private http: HttpClient) { }

  public salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  public listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  public getUsuario(): Usuario{
    let usuario = new Usuario();
    usuario.nome = "User";
    usuario.email = "user@gmail.com";

    return usuario;
  }

  public listaUsuario(): Usuario[] {
    return [
      {
        nome: "Usuário 1",
        email: "usuário1@gmail.com"
      },
      {
        nome: "Usuário 2",
        email: "usuário2@gmail.com"
      },
      {
        nome: "Usuário 3",
        email: "usuário3@gmail.com"
      },
      {
        nome: "Usuário 4",
        email: "usuário4@gmail.com"
      }
    ]
  }
}

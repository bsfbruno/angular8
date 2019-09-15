import { UsuarioService } from './../../usuario.service';
import { Usuario } from './../usuario.domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  public salvar() {
    this.usuarioService.salvar(this.usuario).subscribe(
      response => {
        alert("Salvo com sucesso!");
      },
      error => {
        alert("Erro ao inserir usuário");
      }
    );
  }
}

import { Usuario } from './../usuario.domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor() { }

  ngOnInit() {
  }

  public salvar() {
    alert("Salvo com sucesso!");
  }
}

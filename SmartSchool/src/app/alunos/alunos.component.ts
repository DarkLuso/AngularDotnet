import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = "Alunos";

  public alunos = [
  {id: '1',nome: "Marta", sobrenome: 'Kent', telefone: '999332255'},
  {id: '2',nome: "Paula", sobrenome: 'Isabela', telefone: '993354288'},
  {id: '3',nome: "Laura", sobrenome: 'Antonia', telefone: '955668899'},
  {id: '4',nome: "Luiza", sobrenome: 'Maria', telefone: '965656599'},
  {id: '5',nome: "Lucas", sobrenome: 'Machado', telefone: '993328753'},
  {id: '6',nome: "Pedro", sobrenome: 'Alvares', telefone: '999324507'},
  {id: '7',nome: "Paulo", sobrenome: 'José', telefone: '918319967'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";

  public professores = [
    {id: '1', nome: "Legolas", disciplina: 'Arquearia'},
    {id: '2', nome: "Ricardo", disciplina: 'Matematica'},
    {id: '3', nome: "Dagoth Ur", disciplina: 'Cultos das Trevas'},
    {id: '4', nome: "Barba Negra", disciplina: 'Pirataria'},
    {id: '5', nome: "Ben 10", disciplina: 'Heroismo'},    

  ]



  constructor() { }

  ngOnInit() {
  }

}

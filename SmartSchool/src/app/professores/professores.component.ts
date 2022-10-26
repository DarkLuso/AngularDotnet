import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";

  public professores = [
    {nome: "Legolas"},
    {nome: "Ricardo"},
    {nome: "Dagoth Ur"},
    {nome: "Barba Negra"},
    {nome: "Ben 10"},    

  ]



  constructor() { }

  ngOnInit() {
  }

}

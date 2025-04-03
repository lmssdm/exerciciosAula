import { Component } from '@angular/core';

@Component({
  selector: 'app-dias',
  imports: [],
  templateUrl: './dias.component.html',
  styleUrl: './dias.component.css'
})
export class DiasComponent {
  diaSemana: string
  constructor(){
    const diaAtual: number = new Date().getDay();
    this.diaSemana = getDia(diaAtual)
    console.log(`Dia da semana atual: ${this.diaSemana}`)
  }
}

function getDia(numDia: number): string{
  enum DiasSemana {
    Domingo = 1,
    Segunda = 2,
    Terça = 3,
    Quarta = 4,
    Quinta = 5,
    Sexta = 6,
    Sábado = 7
  }
  switch(numDia) {
    case 1:
      return "Domingo"
    case 2:
      return "Segunda"
    case 3:
      return "Terça"
    case 4:
      return "Quarta"
    case 5:
      return "Quinta"
    case 6:
      return "Sexta"
    case 7:
      return "Sábado"
    default:
      return "Número informado não corresponde a nenhum dia da semana."
  }
}

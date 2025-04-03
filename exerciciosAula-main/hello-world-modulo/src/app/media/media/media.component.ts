import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})

export class MediaComponent {

  media: number;

  constructor(){
    this.media = calcularMedia([3, 4, 5]);
    console.log(this.media);
  }


}

function calcularMedia(numeros: number[]) : number {
  let soma = 0;
  for (const numero of numeros) {
    soma += numero;
  }
  let media = soma / numeros.length;
  console.log(`Média: de ${numeros} -> ${media}`)
  return media;
}

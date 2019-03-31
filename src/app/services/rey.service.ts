import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReyService {

  constructor() { }

  public moverRey(posInicial: string, posFinal: string, ficha: string){
    
    var casillaInicial = parseInt(posInicial.split(/([a-h])/)[2]);
    var casillaFinal = parseInt(posFinal.split(/([a-h])/)[2]);
    var casillaInicialFila = posInicial.split(/([a-h])/)[1];
    var casillaFinalFila = posFinal.split(/([a-h])/)[1];

    if(Math.abs(casillaInicial - casillaFinal) == 1 && Math.abs(fromLetters(casillaInicialFila) - fromLetters(casillaFinalFila)) <= 1 || Math.abs(casillaInicial - casillaFinal) == 0 && Math.abs(fromLetters(casillaInicialFila) - fromLetters(casillaFinalFila)) == 1){
      document.getElementById(posFinal).innerHTML = ficha;
      document.getElementById(posInicial).innerHTML = '';
    }

    function fromLetters(str :string){
      switch(str){
        case 'a':
          return 1;
        case 'b':
          return 2;
        case 'c':
          return 3;
        case 'd':
          return 4;
        case 'e':
          return 5;
        case 'f':
          return 6;
        case 'g':
          return 7;
        case 'h':
          return 8;
      }
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlfilService {

  constructor() { }

  public moverAlfil(posInicial: string, posFinal: string, ficha: string){

    if(document.getElementById(posInicial).style.backgroundColor == document.getElementById(posFinal).style.backgroundColor && Math.abs(parseInt(posFinal.split(/([a-h])/)[2]) - parseInt(posInicial.split(/([a-h])/)[2])) == Math.abs(fromLetters(posFinal.split(/([a-h])/)[1]) - fromLetters(posInicial.split(/([a-h])/)[1]))){
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

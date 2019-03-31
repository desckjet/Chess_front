import { Injectable } from '@angular/core';
import { TorreService } from '../services/torre.service';
import { AlfilService } from '../services/alfil.service';

@Injectable({
  providedIn: 'root'
})
export class DamaService {

  constructor(private torre:TorreService ,private alfil:AlfilService) { }

  public moverDama(posInicial: string, posFinal: string, ficha: string){

    if(document.getElementById(posInicial).style.backgroundColor == document.getElementById(posFinal).style.backgroundColor && Math.abs(parseInt(posFinal.split(/([a-h])/)[2]) - parseInt(posInicial.split(/([a-h])/)[2])) == Math.abs(fromLetters(posFinal.split(/([a-h])/)[1]) - fromLetters(posInicial.split(/([a-h])/)[1]))){
      this.alfil.moverAlfil(posInicial, posFinal, ficha);
    }else if(posInicial.split(/([a-h])/)[1] == posFinal.split(/([a-h])/)[1] || posInicial.split(/([a-h])/)[2] == posFinal.split(/([a-h])/)[2]){
      this.torre.moverTorre(posInicial, posFinal, ficha);
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

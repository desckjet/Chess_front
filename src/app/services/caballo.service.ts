import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaballoService {

  constructor() { }

  public moverCaballo(posInicial: string, posFinal: string){

    var ficha = document.getElementById(posInicial).innerText

    if(Math.abs(parseInt(posInicial.split(/([a-h])/)[2]) - parseInt(posFinal.split(/([a-h])/)[2])) == 2 && Math.abs(fromLetters(posInicial.split(/([a-h])/)[1]) - fromLetters(posFinal.split(/([a-h])/)[1])) == 1 || Math.abs(fromLetters(posInicial.split(/([a-h])/)[1]) - fromLetters(posFinal.split(/([a-h])/)[1])) == 2 && Math.abs(parseInt(posInicial.split(/([a-h])/)[2]) - parseInt(posFinal.split(/([a-h])/)[2])) == 1){
      document.getElementById(posFinal).innerHTML = ficha;
      document.getElementById(posInicial).innerHTML = '';
    }

    function fromLetters(str) {
      var out = 0, 
        len = str.length, 
        pos = len;
      while (--pos > -1) {
          out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - 1 - pos);
      }
      return out;
    }

  }
}

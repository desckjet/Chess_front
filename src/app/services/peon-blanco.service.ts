import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeonBlancoService {

  constructor() { }

  public moverPeon(posInicial: string, posFinal: string, ficha: string){

    var abecedario= new Array('a','b','c','d','e','f','g','h');
    for(var i = 0; i < abecedario.length; i++){
      //comprobamos que el usuario escoja la casilla siguiente
      var fila = parseInt(posFinal.split(/([a-h])/)[2]) -1;
      // if para mover dos casillas
      if(posInicial == abecedario[i]+2 && posFinal == abecedario[i]+4 && document.getElementById(posFinal).innerText == '' && document.getElementById(abecedario[i]+3).innerText == ''){
        document.getElementById(posFinal).innerHTML = ficha;
        document.getElementById(posInicial).innerHTML = '';
        
      //if para mover una casilla
      }else if(posInicial == posFinal.split(/([a-h])/)[1] + fila && document.getElementById(posFinal).innerText == ''){
        document.getElementById(posFinal).innerHTML = ficha;
        document.getElementById(posInicial).innerHTML = '';

      //if para comer
      }else if(fila == parseInt(posInicial.split(/([a-h])/)[2]) && posInicial.split(/([a-h])/)[1] != posFinal.split(/([a-h])/)[1] && document.getElementById(posFinal).innerText != ''){
        document.getElementById(posFinal).innerHTML = ficha;
        document.getElementById(posInicial).innerHTML = '';
      }
    }
    
  }
}

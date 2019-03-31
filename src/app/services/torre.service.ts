import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  constructor() { }

  public moverTorre(posInicial: string, posFinal: string, ficha: string){

    var bandera = false;
    var casillaInicial = parseInt(posInicial.split(/([a-h])/)[2]);
    var casillaFinal = parseInt(posFinal.split(/([a-h])/)[2]);
    var casillaInicialFila = posInicial.split(/([a-h])/)[1];
    var casillaFinalFila = posFinal.split(/([a-h])/)[1];
    var vectorCasillasColumna = new Array();
    var vectorCasillasFila = new Array();

    while(casillaInicial != casillaFinal){

      if(casillaInicial < casillaFinal){
        vectorCasillasColumna.push(casillaInicial);
        casillaInicial = casillaInicial + 1;
      }else if(casillaInicial > casillaFinal){
        vectorCasillasColumna.push(casillaInicial);
        casillaInicial = casillaInicial - 1;
      }
    }

    while(casillaInicialFila != casillaFinalFila){

      if(casillaInicialFila < casillaFinalFila){
        vectorCasillasFila.push(casillaInicialFila);
        var cambiarLetraPositiva = fromLetters(casillaInicialFila);
        cambiarLetraPositiva = cambiarLetraPositiva + 1;
        casillaInicialFila = toLetters(cambiarLetraPositiva);
        
      }else if(casillaInicialFila > casillaFinalFila){
        vectorCasillasFila.push(casillaInicialFila);
        var cambiarLetraNegativa = fromLetters(casillaInicialFila);
        cambiarLetraNegativa = cambiarLetraNegativa - 1;
        casillaInicialFila = toLetters(cambiarLetraNegativa);
      }
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

    function toLetters(num){
      switch(num){
        case 33:
          return 'a';
        case 34:
          return 'b';
        case 35:
          return 'c';
        case 36:
          return 'd';
        case 37:
          return 'e';
        case 38:
          return 'f';
        case 39:
          return 'g';
        case 40:
          return 'h';
      }
    }

    for(var i = 1; i < vectorCasillasColumna.length; i++){
      if(posInicial.split(/([a-h])/)[1] == posFinal.split(/([a-h])/)[1] && document.getElementById(posInicial.split(/([a-h])/)[1] + vectorCasillasColumna[i]).innerText != ''){
        bandera = true;
        //console.log(document.getElementById(posInicial.split(/([a-h])/)[1] + vectorCasillas[i]).innerText);
      }
    }

    for(var i = 1; i < vectorCasillasFila.length; i++){
      if(posInicial.split(/([a-h])/)[2] == posFinal.split(/([a-h])/)[2] && document.getElementById(vectorCasillasFila[i] + posInicial.split(/([a-h])/)[2]).innerText != ''){
        bandera = true;
        //console.log(document.getElementById(vectorCasillasFila[i] + posInicial.split(/([a-h])/)[2]).innerText)
      }
    }
  
    if(bandera == false && posInicial.split(/([a-h])/)[1] == posFinal.split(/([a-h])/)[1] || bandera == false && posInicial.split(/([a-h])/)[2] == posFinal.split(/([a-h])/)[2]){
      document.getElementById(posFinal).innerHTML = ficha;
      document.getElementById(posInicial).innerHTML = '';
      bandera = false;
    }

  }
}

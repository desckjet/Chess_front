import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlfilService {

  constructor() { }

  public moverAlfil(posInicial: string, posFinal: string, ficha: string){

    var bandera = false;
    var casillaInicial = parseInt(posInicial.split(/([a-h])/)[2]);
    var casillaFinal = parseInt(posFinal.split(/([a-h])/)[2]);
    var casillaInicialFila = posInicial.split(/([a-h])/)[1];
    var casillaFinalFila = posFinal.split(/([a-h])/)[1];
    var vectorCasillas = new Array();

    while(casillaInicial != casillaFinal && casillaInicialFila != casillaFinalFila){

      if(casillaInicial < casillaFinal && casillaInicialFila < casillaFinalFila){
        vectorCasillas.push(casillaInicialFila + casillaInicial);
        casillaInicial = casillaInicial + 1;
        var cambiarLetra = fromLetters(casillaInicialFila);
        cambiarLetra = cambiarLetra + 1;
        casillaInicialFila = toLetters(cambiarLetra);

      } else if(casillaInicial < casillaFinal && casillaInicialFila > casillaFinalFila){
        vectorCasillas.push(casillaInicialFila + casillaInicial);
        casillaInicial = casillaInicial + 1;
        var cambiarLetra = fromLetters(casillaInicialFila);
        cambiarLetra = cambiarLetra - 1;
        casillaInicialFila = toLetters(cambiarLetra);
        
      } else if(casillaInicial > casillaFinal && casillaInicialFila < casillaFinalFila){
        vectorCasillas.push(casillaInicialFila + casillaInicial);
        casillaInicial = casillaInicial - 1;
        var cambiarLetra = fromLetters(casillaInicialFila);
        cambiarLetra = cambiarLetra + 1;
        casillaInicialFila = toLetters(cambiarLetra);

      }else if(casillaInicial > casillaFinal && casillaInicialFila > casillaFinalFila){
        vectorCasillas.push(casillaInicialFila + casillaInicial);
        casillaInicial = casillaInicial - 1;
        var cambiarLetraNegativa = fromLetters(casillaInicialFila);
        cambiarLetraNegativa = cambiarLetraNegativa - 1;
        casillaInicialFila = toLetters(cambiarLetraNegativa);
      }
    }

    for(var i = 1; i < vectorCasillas.length; i++){
      if(document.getElementById(vectorCasillas[i]).innerText != ''){
        bandera = true;
      }
    }

    if(bandera == false && document.getElementById(posInicial).style.backgroundColor == document.getElementById(posFinal).style.backgroundColor && Math.abs(parseInt(posFinal.split(/([a-h])/)[2]) - parseInt(posInicial.split(/([a-h])/)[2])) == Math.abs(fromLetters(posFinal.split(/([a-h])/)[1]) - fromLetters(posInicial.split(/([a-h])/)[1]))){
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

    function toLetters(num :number){
      switch(num){
        case 1:
          return 'a';
        case 2:
          return 'b';
        case 3:
          return 'c';
        case 4:
          return 'd';
        case 5:
          return 'e';
        case 6:
          return 'f';
        case 7:
          return 'g';
        case 8:
          return 'h';
      }
    }
  }
}

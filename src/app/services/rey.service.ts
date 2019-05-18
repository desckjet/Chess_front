import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReyService {

  constructor() { }

  public moverRey(posInicial: string, posFinal: string){

    var ficha = document.getElementById(posInicial).innerText
    
    var casillaInicial = parseInt(posInicial.split(/([a-h])/)[2]);
    var casillaFinal = parseInt(posFinal.split(/([a-h])/)[2]);
    var casillaInicialFila = posInicial.split(/([a-h])/)[1];
    var casillaFinalFila = posFinal.split(/([a-h])/)[1];

    if(Math.abs(casillaInicial - casillaFinal) == 1 && Math.abs(fromLetters(casillaInicialFila) - fromLetters(casillaFinalFila)) <= 1 || Math.abs(casillaInicial - casillaFinal) == 0 && Math.abs(fromLetters(casillaInicialFila) - fromLetters(casillaFinalFila)) == 1){
      document.getElementById(posFinal).innerHTML = ficha;
      document.getElementById(posInicial).innerHTML = '';
    }
    
    if(posInicial == 'e1' && posFinal == 'g1'){
      if(document.getElementById('f1').innerText == '' && document.getElementById('g1').innerText == ''){
        document.getElementById(posFinal).innerHTML = ficha;
        document.getElementById(posInicial).innerHTML = '';
        document.getElementById('f1').innerHTML = '♖';
        document.getElementById('h1').innerHTML = '';
      }
    }else if(posInicial == 'e1' && posFinal == 'c1'){
      if(document.getElementById('d1').innerText == '' && document.getElementById('c1').innerText == '' && document.getElementById('b1').innerText == ''){
        document.getElementById(posFinal).innerHTML = ficha;
        document.getElementById(posInicial).innerHTML = '';
        document.getElementById('d1').innerHTML = '♖';
        document.getElementById('a1').innerHTML = '';
      }
    }else if(posInicial == 'e8' && posFinal == 'g8'){
      if(document.getElementById('f8').innerText == '' && document.getElementById('g8').innerText == ''){
        document.getElementById(posFinal).innerHTML = ficha;
        document.getElementById(posInicial).innerHTML = '';
        document.getElementById('f8').innerHTML = '♜';
        document.getElementById('h8').innerHTML = '';
      }
    }else if(posInicial == 'e8' && posFinal == 'c8'){
      if(document.getElementById('d8').innerText == '' && document.getElementById('c8').innerText == '' && document.getElementById('b8').innerText == ''){
        document.getElementById(posFinal).innerHTML = ficha;
        document.getElementById(posInicial).innerHTML = '';
        document.getElementById('d8').innerHTML = '♜';
        document.getElementById('a8').innerHTML = '';
      }
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

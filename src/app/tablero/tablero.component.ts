import { Component, OnInit } from '@angular/core';

import { PeonService } from '../services/peon.service';
import { TorreService } from '../services/torre.service';
import { CaballoService } from '../services/caballo.service';
import { AlfilService } from '../services/alfil.service';
import { DamaService } from '../services/dama.service';
import { ReyService } from '../services/rey.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  ini : string;
  fin : string;
  ficha_negra : string = '';

  constructor(private peon:PeonService, private torre:TorreService, private caballo:CaballoService, private alfil:AlfilService, private dama:DamaService, private rey:ReyService, private dataService : DataService) {
    this.dataService.getData().subscribe(data => {
      console.log(data);
      var types = JSON.stringify(data);
      var sp = types.split(':"');
      sp = sp[1].split('"}');
      sp = sp[0].split(/([a-h][1-8])/);
      this.ini = sp[1];
      this.fin = sp[3];
      this.ficha_negra = document.getElementById(this.ini).innerText;
      console.log(this.ini);
      console.log(this.fin);
      console.log(this.ficha_negra);
    });
   }

  posInicial :string = '';
  posFinal :string = '';
  ficha :string = '';
  turno : number = 1;

  public movimiento(posicion:string) {
    if(this.posInicial == ''){
      this.posInicial = posicion
      if(document.getElementById(this.posInicial).innerText != ''){
        this.ficha = document.getElementById(this.posInicial).innerText;
        //console.log(this.ficha);
      } else if(document.getElementById(this.posInicial).innerText == ''){
        console.log('no selecciono ficha');
      }
    } else {
      this.posFinal = posicion
  
      if(this.ficha == '♙' || this.ficha == '♟'){
        if(this.ficha == '♙' && this.turno == 1 || this.ficha == '♟' && this.turno == 0){
          this.peon.moverPeon(this.posInicial, this.posFinal);
          var vectorEstado = this.obtenerEstado();
          var estadoString = vectorEstado.join();
          var estado = {
            "posicion": estadoString,
          }
          this.enviar(estado);
          //console.log(estado);
          if(this.ficha_negra == '♟'){
            this.peon.moverPeon(this.ini, this.fin);
          }
        }
        if(this.ficha == '♙'){this.turno = 0} else if(this.ficha == '♟'){this.turno = 1} 
        if(this.ficha_negra == '♟'){this.turno = 1}
        //console.log(this.turno);
      }else if(this.ficha == '♖' || this.ficha == '♜'){
        this.torre.moverTorre(this.posInicial, this.posFinal);
      }else if(this.ficha == '♘' || this.ficha == '♞'){
        this.caballo.moverCaballo(this.posInicial, this.posFinal);
      }else if(this.ficha == '♗' || this.ficha == '♝'){
        this.alfil.moverAlfil(this.posInicial, this.posFinal);
      }else if(this.ficha == '♕' || this.ficha == '♛'){
        this.dama.moverDama(this.posInicial, this.posFinal);
      }else if(this.ficha == '♔' || this.ficha == '♚'){
        this.rey.moverRey(this.posInicial, this.posFinal);
      }
      
      this.posInicial = '';
      this.posFinal = '';
      this.ficha = '';

      this.ini = '';
      this.fin = '';
      this.ficha_negra = '';
    }
  
  }

  public obtenerEstado(){
    var abecedario= new Array('a','b','c','d','e','f','g','h');
    var numeros= new Array('8','7','6','5','4','3','2','1');
    var vector = []

    for(var j = 0; j < numeros.length; j++){
      for(var i = 0; i < abecedario.length; i++){
      
        if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♙'){
          vector.push(21.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♟'){
          vector.push(15.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♖'){
          vector.push(16.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♜'){
          vector.push(10.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♘'){
          vector.push(17.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♞'){
          vector.push(11.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♗'){
          vector.push(18.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♝'){
          vector.push(12.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♕'){
          vector.push(19.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♛'){
          vector.push(13.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♔'){
          vector.push(20.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == '♚'){
          vector.push(14.);
        }else if(document.getElementById(abecedario[i]+numeros[j]).innerText == ''){
          vector.push(99.);
        }
      }
    }
    return vector;
  }

  enviar(dato){
    console.log('works');
    this.dataService.sendData(dato).subscribe();
  }

  ngOnInit() {

  }

}

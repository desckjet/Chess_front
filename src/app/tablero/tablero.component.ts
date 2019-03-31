import { Component, OnInit } from '@angular/core';
import { PeonBlancoService } from '../services/peon-blanco.service';
import { PeonNegroService } from '../services/peon-negro.service';
import { TorreService } from '../services/torre.service';
import {CaballoService} from '../services/caballo.service';
import {AlfilService} from '../services/alfil.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor(private peonBlanco:PeonBlancoService , private peonNegro:PeonNegroService, private torre:TorreService, private caballo:CaballoService, private alfil:AlfilService) { }

  posInicial :string = '';
  posFinal :string = '';
  ficha :string = '';

  public movimiento(posicion:string) {
    if(this.posInicial == ''){
      this.posInicial = posicion
      if(document.getElementById(this.posInicial).innerText != ''){
        this.ficha = document.getElementById(this.posInicial).innerText;
        //console.log(this.ficha);
      } else {
        console.log('no selecciono ficha');
      }
    } else {
      this.posFinal = posicion
      if(this.ficha == '♙'){
        this.peonBlanco.moverPeon(this.posInicial, this.posFinal, this.ficha);
      }else if(this.ficha == '♟'){
        this.peonNegro.moverPeon(this.posInicial, this.posFinal, this.ficha);
      }else if(this.ficha == '♖' || this.ficha == '♜'){
        this.torre.moverTorre(this.posInicial, this.posFinal, this.ficha);
      }else if(this.ficha == '♘' || this.ficha == '♞'){
        this.caballo.moverCaballo(this.posInicial, this.posFinal, this.ficha);
      }else if(this.ficha == '♗' || this.ficha == '♝'){
        this.alfil.moverAlfil(this.posInicial, this.posFinal, this.ficha);
      }

      this.posInicial = '';
    }
  
  }

  ngOnInit() {

  }

}

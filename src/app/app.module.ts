import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './tablero/tablero.component';

import { PeonService } from './services/peon.service';
import { TorreService } from './services/torre.service';
import { CaballoService } from './services/caballo.service';
import { AlfilService } from './services/alfil.service';
import { DamaService } from './services/dama.service';
import { ReyService } from './services/rey.service';
import { OperacionesComponent } from './operaciones/operaciones.component';

import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    OperacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PeonService, TorreService, CaballoService, AlfilService, DamaService, ReyService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

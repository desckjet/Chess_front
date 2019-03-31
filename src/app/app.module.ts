import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './tablero/tablero.component';
import { PeonBlancoService } from './services/peon-blanco.service';
import { PeonNegroService } from './services/peon-negro.service';
import { TorreService } from './services/torre.service';
import { CaballoService } from './services/caballo.service';
import { AlfilService } from './services/alfil.service';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PeonBlancoService, PeonNegroService, TorreService, CaballoService, AlfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }

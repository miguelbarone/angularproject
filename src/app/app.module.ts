import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JogoComponent } from './jogo/jogo.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  constructor() {
  }

  jogarJogo(){
    document.querySelector("app-pagina-inicial").classList.add("apagar");
    document.querySelector("app-jogo").classList.remove("apagar");
  }

}
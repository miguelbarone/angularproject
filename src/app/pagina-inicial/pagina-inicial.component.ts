import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  @Output() jogar = new EventEmitter();
   
  constructor() { }

  ngOnInit() {
   
    
  }
  abrirJogo(){
    this.jogar.emit();
    var nome = prompt('Se apresente, estranho! Qual o seu nome?');
 
    setTimeout(function () { alert('Seja bem-vindo a Taverna do Anão Manco, ' + nome + ' !'); }, 500);
    setTimeout(function () { alert('Entre e desfrute da nossa atração principal. \n THE OLD GIRL GAME');  }, 500);

  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ftc-botao',
  templateUrl: './botao.component.html',
})
export class BotaoComponent implements OnInit {
  @Input() texto: string = 'textoBotao';

  @Output() cliqueBotao = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public clicouBotao() {
    console.log('clicou');
  }
}

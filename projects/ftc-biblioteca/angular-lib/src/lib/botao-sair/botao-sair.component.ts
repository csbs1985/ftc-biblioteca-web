import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ftc-botao-sair',
  templateUrl: './botao-sair.component.html',
})
export class BotaoSairComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sair(): void {
    console.log('sair');
  } //TODO: criar função
}

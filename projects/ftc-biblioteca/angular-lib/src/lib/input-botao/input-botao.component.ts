import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ftc-input-botao',
  templateUrl: './input-botao.component.html',
})
export class InputBotaoComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() rotulo: string = '';
  @Input() botao: string = '';
  @Input() type = ['text', 'number', 'email'];

  @Output() inputBotaoEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public inputBotaoDigitando(event: any): void {
    console.log(event);
  }

  public inputBotaoSubmite(event: any): void {
    this.inputBotaoEmitter.emit(event);
  }
}

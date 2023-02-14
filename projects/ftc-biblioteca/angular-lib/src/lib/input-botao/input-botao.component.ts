import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputBotaoInterface } from '../../interfaces/input-botao.interface';

@Component({
  selector: 'ftc-input-botao',
  templateUrl: './input-botao.component.html',
})
export class InputBotaoComponent implements OnInit {
  @Input() inputBotao!: InputBotaoInterface;

  @Output() inputBotaoOutput = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public inputBotaoDigitando(event: any): void {
    console.log(event);
  }

  public inputBotaoSubmite(event: any): void {
    this.inputBotaoOutput.emit(event);
  }
}

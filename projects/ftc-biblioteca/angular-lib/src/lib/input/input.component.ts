import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ftc-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() rotulo: string = '';
  @Input() type = ['text', 'number', 'email'];

  @Output() textoInserido = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public digitando(event: any): void {
    console.log(event);
  }
}

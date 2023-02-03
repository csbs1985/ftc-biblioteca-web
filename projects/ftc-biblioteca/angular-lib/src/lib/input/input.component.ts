import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ftc-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() rotulo: string = '';
  @Input() type = ['text', 'number', 'email'];

  @Output() inputEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public inputDigitando(event: any): void {
    this.inputEmitter.emit(event);
  }
}

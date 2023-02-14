import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PeriodoInterface } from '../../public-api';

@Component({
  selector: 'ftc-input-periodo',
  templateUrl: './input-periodo.component.html',
  styleUrls: ['./input-periodo.component.scss'],
})
export class InputPeriodoComponent implements OnInit {
  @Input() inputPeriodoInput: PeriodoInterface = {
    inicio: '',
    final: '',
  };

  @Output() inputPeriodoOutput = new EventEmitter<PeriodoInterface>();

  constructor() {}

  ngOnInit(): void {}

  public inputPeriodoInicio(data: string) {
    this.inputPeriodoInput.inicio = data;
    this.inputPeriodoOutput.emit(this.inputPeriodoInput);
  }

  public inputPeriodoIFinal(data: string) {
    this.inputPeriodoInput.final = data;
    this.inputPeriodoOutput.emit(this.inputPeriodoInput);
  }
}

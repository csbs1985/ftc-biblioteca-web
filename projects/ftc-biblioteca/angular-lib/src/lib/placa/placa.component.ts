import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlacaInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/placa.interface';

@Component({
  selector: 'ftc-placa',
  templateUrl: './placa.component.html',
  styleUrls: ['./placa.component.scss'],
})
export class PlacaComponent implements OnInit {
  @Input() placaInput!: PlacaInterface;

  @Output() placaOutput = new EventEmitter<PlacaInterface>();

  public placaSelecionada: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public selecionarPlaca(): void {
    this.placaSelecionada = !this.placaSelecionada;
    this.placaOutput.emit(this.placaInput);
  }
}

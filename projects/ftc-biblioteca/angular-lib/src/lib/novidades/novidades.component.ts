import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NovidadesInterface } from '../../public-api';

@Component({
  selector: 'ftc-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.scss'],
})
export class NovidadesComponent implements OnInit {
  @Input() novidadesInput!: NovidadesInterface;

  @Output() novidadesOutput = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public fecharNovidades(): void {
    this.novidadesOutput.emit(true);
  }
}

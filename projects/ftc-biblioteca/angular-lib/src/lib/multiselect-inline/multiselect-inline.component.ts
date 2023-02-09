import { SelectInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/select.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ftc-multiselect-inline',
  templateUrl: './multiselect-inline.component.html',
})
export class MultiselectInlineComponent implements OnInit {
  @Input() rotulo: string = '';
  @Input() conteudo!: SelectInterface[];

  @Output() selectInlineOutput = new EventEmitter<SelectInterface[]>();

  constructor() {}

  ngOnInit(): void {}

  public selecionarItem(value: SelectInterface): void {
    this.conteudo.forEach((item) => {
      if (item.valor === value.valor)
        item.selecionado = item.selecionado ? false : true;
    });

    this.selectInlineOutput.emit(this.conteudo);
  }
}

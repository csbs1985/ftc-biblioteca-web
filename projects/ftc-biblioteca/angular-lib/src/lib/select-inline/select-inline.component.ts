import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/select.interface';
import { SelectInlineEnum } from '../../enums/select-inline.enum';

@Component({
  selector: 'ftc-select-inline',
  templateUrl: './select-inline.component.html',
})
export class SelectInlineComponent implements OnInit {
  @Input() tipo: SelectInlineEnum = SelectInlineEnum.UNICA;
  @Input() rotulo: string = '';
  @Input() conteudo!: SelectInterface[];

  @Output() selectInlineOutput = new EventEmitter<SelectInterface[]>();

  constructor() {}

  ngOnInit(): void {}

  public selecionarItem(value: SelectInterface): void {
    this.tipo === SelectInlineEnum.UNICA
      ? this.selecaoUnica(value)
      : this.selecaoMultipla(value);
  }

  private selecaoUnica(value: SelectInterface): void {
    this.conteudo.forEach((item) => (item.selecionado = false));

    this.conteudo.forEach((item) => {
      if (item.valor === value.valor) item.selecionado = true;
    });

    this.selectInlineOutput.emit(this.conteudo);
  }

  private selecaoMultipla(value: SelectInterface): void {
    this.conteudo.forEach((item) => {
      if (item.valor === value.valor)
        item.selecionado = item.selecionado ? false : true;
    });

    this.selectInlineOutput.emit(this.conteudo);
  }
}

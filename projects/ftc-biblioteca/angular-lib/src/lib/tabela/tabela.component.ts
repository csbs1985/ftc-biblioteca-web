import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  PaginacaoInterface,
  TabelaInterface,
} from 'projects/ftc-biblioteca/angular-lib/src/public-api';

@Component({
  selector: 'ftc-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  @Input() tabelaInput!: TabelaInterface;

  @Output() tabelaOutput = new EventEmitter();
  @Output() tabelaPaginacaoOutput = new EventEmitter();

  public selecionados: any[] = [];
  public paginacao!: PaginacaoInterface;

  constructor() {}

  ngOnInit(): void {
    this.paginacao = this.tabelaInput!.paginacao;
  }

  public tabelaSelecionar(linha: any): void {
    if (this.selecionados.some((item: any) => item.id === linha.id)) {
      var index = this.selecionados.findIndex(
        (value: any) => value.id === linha.id
      );
      this.selecionados.splice(index, 1);
    } else this.selecionados.push(linha);

    this.tabelaOutput.emit(this.selecionados);
  }

  public tabelaItemSelecionado(linhaId: any): boolean {
    return this.selecionados.some((item: any) => item.id === linhaId)
      ? true
      : false;
  }

  public paginacaoOutput(paginaSelecionada: number) {
    this.tabelaPaginacaoOutput.emit(paginaSelecionada);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginacaoInterface } from '../../public-api';

@Component({
  selector: 'ftc-paginacao',
  templateUrl: './paginacao.component.html',
})
export class PaginacaoComponent implements OnInit {
  @Input() paginacaoInput!: PaginacaoInterface;

  @Output() paginacaoOutput = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public mostrarPaginacaoAnteriorProxima(pagina: number): boolean {
    return pagina !== 1 && pagina !== this.paginacaoInput.ultimaPagina
      ? true
      : false;
  }

  public paginaAnterior(): void {
    if (this.paginacaoInput.paginaAtual > 1) {
      this.paginacaoInput.paginaAtual--;
      this.mostrarPaginas();
    }
  }

  public proximaPagina(): void {
    if (this.paginacaoInput.paginaAtual < this.paginacaoInput.ultimaPagina) {
      this.paginacaoInput.paginaAtual++;
      this.mostrarPaginas();
    }
  }

  public selecionarPagina(pagina: number): void {
    if (this.paginacaoInput.paginaAtual !== pagina) {
      this.paginacaoInput.paginaAtual = pagina;
      this.mostrarPaginas();
    }
  }

  private mostrarPaginas(): void {
    var paginaAtual = this.paginacaoInput.paginaAtual;

    if (paginaAtual === 1) this.paginacaoInput.proximasPaginas = [1, 2, 3];

    if (paginaAtual === this.paginacaoInput.ultimaPagina) {
      this.paginacaoInput.proximasPaginas = [
        paginaAtual - 2,
        paginaAtual - 1,
        paginaAtual,
      ];
    }

    if (paginaAtual !== 1 && paginaAtual !== this.paginacaoInput.ultimaPagina) {
      this.paginacaoInput.proximasPaginas = [
        paginaAtual - 1,
        paginaAtual,
        paginaAtual + 1,
      ];
    }

    this.paginacaoOutput.emit(this.paginacaoInput.paginaAtual);
  }

  public get mostrarPontosInicio(): boolean {
    return this.paginacaoInput.paginaAtual > 2 ? true : false;
  }

  public get mostrarPontosFinal(): boolean {
    return this.paginacaoInput.paginaAtual <
      this.paginacaoInput.ultimaPagina - 2
      ? true
      : false;
  }

  public get desabilitarPaginacaoAnterior(): boolean {
    return this.paginacaoInput.paginaAtual === 1 ? true : false;
  }

  public get desabilitarProximaPaginacao(): boolean {
    return this.paginacaoInput.paginaAtual === this.paginacaoInput.ultimaPagina
      ? true
      : false;
  }
}

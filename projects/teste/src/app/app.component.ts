import { LogoEnum } from './../../../ftc-biblioteca/angular-lib/src/enums/logo.enum';
import { Component } from '@angular/core';
import { SelectInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/select.interface';
import { TemaService } from 'projects/ftc-biblioteca/angular-lib/src/services/tema.service';
import { TabelaInterface } from 'projects/ftc-biblioteca/angular-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabela: TabelaInterface = {
    rotulo: 'rotulo da tabela',
    paginacao: {
      mostrandoAte: 4,
      mostrandoDe: 1,
      paginaAtual: 1,
      paginaTotal: 8,
      porPagina: 10,
      proximasPaginas: [1, 2, 3],
      ultimaPagina: 14,
      totalConteudo: 39,
    },
    titulo: [
      'placar',
      'fabricante',
      'modelo',
      'tipo',
      'plano',
      'promoção',
      'vendido',
    ],
    conteudo: [
      {
        id: 'hfhdgf01',
        placar: 'AAA0A00',
        fabricante: 'troller',
        modelo: 't4',
        tipo: 'jeep',
        plano: 'sem parar pré-pago',
        promoção: '',
        vendido: 'não',
      },
      {
        id: 'hfhdgf02',
        placar: 'AAA0A00',
        fabricante: 'troller',
        modelo: 't4',
        tipo: 'jeep',
        plano: 'sem parar pré-pago',
        promoção: '',
        vendido: 'não',
      },
      {
        id: 'hfhdgf03',
        placar: 'AAA0A00',
        fabricante: 'troller',
        modelo: 't4',
        tipo: 'jeep',
        plano: 'sem parar pré-pago',
        promoção: '',
        vendido: 'não',
      },
      {
        id: 'hfhdgf04',
        placar: 'AAA0A00',
        fabricante: 'troller',
        modelo: 't4',
        tipo: 'jeep',
        plano: 'sem parar pré-pago',
        promoção: '',
        vendido: 'não',
      },
    ],
  };

  conteudo: SelectInterface[] = [
    {
      valor: 'month',
      fantasia: 'Mensual',
      selecionado: true,
      desabilitado: false,
    },
    {
      valor: 'week',
      fantasia: 'Semanal',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'day',
      fantasia: 'Diario',
      selecionado: false,
      desabilitado: false,
    },
    // {
    //   valor: 'h4',
    //   fantasia: '4 Horas',
    //   selecionado: true,
    //   desabilitado: false,
    // },
    // { valor: 'h1', fantasia: '1 Hora', selecionado: false, desabilitado: true },
    // {
    //   valor: 'm30',
    //   fantasia: '30 Minutos',
    //   selecionado: false,
    //   desabilitado: false,
    // },
    // {
    //   valor: 'm15',
    //   fantasia: '15 Minutos',
    //   selecionado: false,
    //   desabilitado: false,
    // },
    // {
    //   valor: 'm5',
    //   fantasia: '5 Minutos',
    //   selecionado: false,
    //   desabilitado: false,
    // },
    // {
    //   valor: 'm1',
    //   fantasia: '1 Minuto',
    //   selecionado: false,
    //   desabilitado: false,
    // },
  ];

  constructor(private temaService: TemaService) {
    this.temaService.pegarTema();
  }

  public menuTituloOutput(event: SelectInterface) {
    console.log(event);
  }

  public tabelaOutput(event: any) {
    console.log(event);
  }

  public get LogoEnum(): typeof LogoEnum {
    return LogoEnum;
  }
}

import { Component } from '@angular/core';
import { LogoEnum } from 'projects/ftc-biblioteca/angular-lib/src/enums/logo.enum';
import { SelectInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/select.interface';
import { TemaService } from 'projects/ftc-biblioteca/angular-lib/src/services/tema.service';
import {
  InputBotaoInterface,
  PeriodoInterface,
  TabelaInterface,
} from 'projects/ftc-biblioteca/angular-lib/src/public-api';
import { PlacaInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/placa.interface';
import { SelectInlineEnum } from 'projects/ftc-biblioteca/angular-lib/src/enums/select-inline.enum';
import { AlertaInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/alerta.interface';
import { NovidadesInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/novidades.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public mostrarNovidades: boolean = true;
  public novidades: NovidadesInterface = {
    titulo: 'o que há de novo no Callcenter',
    projeto: 'Callcenter',
    data: 'fevereiro de 2023',
    versao: '1.69',
    itens: [
      {
        categoria: 'tema',
        texto: 'escolha o tema entre claro e escuro e claro.',
      },
      {
        categoria: 'cartão de crédito',
        texto:
          'adicione, remova e administre os cartões com esta nova função cartão de crédito.',
      },
      {
        categoria: 'unificação',
        texto: 'unificação da função dados cadastrais em menu e remoção.',
      },
      {
        categoria: 'correções de bugs',
        texto: 'vários bugs foram corrigidos.',
      },
    ],
  };

  public alerta: AlertaInterface[] = [
    {
      lido: false,
      texto: 'protocolo do atendimento: 202208231640',
      url: '/retencao/retencao-atendimento',
    },
    {
      lido: false,
      texto:
        'reforçar caracteristicas do plano atual e beneficio do cashback + voucher',
      url: '/retencao/retencao-atendimento',
    },
    {
      lido: false,
      texto: 'confirmar dados do cliente',
      url: '/retencao/retencao-atendimento',
    },
    {
      lido: false,
      texto: 'oferta em todo lugar 2.0',
      url: '/retencao/retencao-atendimento',
    },
  ];

  public inputPeriodo: PeriodoInterface = {
    inicio: '1985-10-31',
    final: '2023-02-14',
  };

  public inputBotao: InputBotaoInterface = {
    botaoTexto: 'texto do botão',
    placeholder: 'input com botão',
    rotulo: 'inPUT com botÃO',
  };

  public selectSubselect = [
    {
      select: 'concorrencia',
      subselect: [
        {
          texto: 'cliente paraná',
          valor: 1,
        },
        {
          texto: 'não quis compartilhar o motivo',
          valor: 2,
        },
        {
          texto: 'roubo',
          valor: 3,
        },
        {
          texto: 'troca de titularidade',
          valor: 4,
        },
      ],
    },
    {
      select: 'financeiro',
      subselect: [
        {
          texto: 'cliente paraná',
          valor: 1,
        },
        {
          texto: 'não quis compartilhar o motivo',
          valor: 2,
        },
        {
          texto: 'roubo',
          valor: 3,
        },
        {
          texto: 'troca de titularidade',
          valor: 4,
        },
      ],
    },
    {
      select: 'motivos pontuais',
      subselect: [
        {
          texto: 'cliente paraná',
          valor: 1,
        },
        {
          texto: 'não quis compartilhar o motivo',
          valor: 2,
        },
        {
          texto: 'roubo',
          valor: 3,
        },
        {
          texto: 'troca de titularidade',
          valor: 4,
        },
      ],
    },
    {
      select: 'problemas operacionais',
      subselect: [
        {
          texto: 'cliente paraná',
          valor: 1,
        },
        {
          texto: 'não quis compartilhar o motivo',
          valor: 2,
        },
        {
          texto: 'roubo',
          valor: 3,
        },
        {
          texto: 'troca de titularidade',
          valor: 4,
        },
      ],
    },
    {
      select: 'venda do veìculo',
      subselect: [
        {
          texto: 'cliente paraná',
          valor: 1,
        },
        {
          texto: 'não quis compartilhar o motivo',
          valor: 2,
        },
        {
          texto: 'roubo',
          valor: 3,
        },
        {
          texto: 'troca de titularidade',
          valor: 4,
        },
      ],
    },
  ];

  public placa: PlacaInterface = {
    modelo: 't4',
    montadora: 'troller',
    placa: 'gdh8b85',
  };

  public tabela: TabelaInterface = {
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

  public conteudo: SelectInterface[] = [
    {
      valor: 'month',
      texto: 'Mensual',
      selecionado: true,
      desabilitado: false,
    },
    {
      valor: 'week',
      texto: 'Semanal',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'day',
      texto: 'Diario',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'h4',
      texto: '4 Horas',
      selecionado: false,
      desabilitado: false,
    },
    { valor: 'h1', texto: '1 Hora', selecionado: false, desabilitado: true },
    {
      valor: 'm30',
      texto: '30 Minutos',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'm15',
      texto: '15 Minutos',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'm5',
      texto: '5 Minutos',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'm1',
      texto: '1 Minuto',
      selecionado: false,
      desabilitado: false,
    },
  ];

  constructor(private temaService: TemaService) {
    this.temaService.pegarTema();
  }

  public novidadesOutput(output: boolean) {
    this.mostrarNovidades = false;
  }

  public menuTituloOutput(event: SelectInterface) {
    console.log(event);
  }

  public tabelaOutput(event: any) {
    console.log(event);
  }

  public tabelaPaginacaoOutput(paginaSelecionada: number) {
    console.log('pagina: ' + paginaSelecionada);
  }

  public placaOutput(placa: PlacaInterface): void {
    console.log(placa);
  }

  public selectSubselectOutput(select: any) {
    console.log(select);
  }

  public inputBotaoOutput(valor: any) {
    console.log(valor);
  }

  public inputPeriodoOutput(valor: any) {
    console.log(valor);
  }

  public get LogoEnum(): typeof LogoEnum {
    return LogoEnum;
  }

  public get SelectInlineEnum(): typeof SelectInlineEnum {
    return SelectInlineEnum;
  }
}

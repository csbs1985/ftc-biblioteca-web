import { Component } from '@angular/core';
import { SelectInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/select.interfaces';
import { TemaService } from 'projects/ftc-biblioteca/angular-lib/src/services/tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  conteudo: SelectInterface[] = [
    {
      valor: 'month',
      fantasia: 'Mensual',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'week',
      fantasia: 'Semanal',
      selecionado: false,
      desabilitado: true,
    },
    {
      valor: 'day',
      fantasia: 'Diario',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'h4',
      fantasia: '4 Horas',
      selecionado: true,
      desabilitado: false,
    },
    { valor: 'h1', fantasia: '1 Hora', selecionado: false, desabilitado: true },
    {
      valor: 'm30',
      fantasia: '30 Minutos',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'm15',
      fantasia: '15 Minutos',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'm5',
      fantasia: '5 Minutos',
      selecionado: false,
      desabilitado: false,
    },
    {
      valor: 'm1',
      fantasia: '1 Minuto',
      selecionado: false,
      desabilitado: false,
    },
  ];

  constructor(private temaService: TemaService) {
    this.temaService.pegarTema();
  }

  public selectInlineOutput(event: SelectInterface[]) {
    console.log(event);
  }
}

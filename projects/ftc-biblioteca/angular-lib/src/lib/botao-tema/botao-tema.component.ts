import { Component, OnInit } from '@angular/core';
import { TemaService } from 'projects/ftc-biblioteca/angular-lib/src/services/tema.service';

@Component({
  selector: 'ftc-botao-tema',
  templateUrl: './botao-tema.component.html',
})
export class BotaoTemaComponent implements OnInit {
  public icon: string;

  constructor(private temaService: TemaService) {
    this.icon = this.temaService.pegarTema();
  }

  ngOnInit(): void {}

  public trocarTema(): string {
    return (this.icon = this.temaService.trocarTema());
  }
}

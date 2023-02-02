import { Component, OnInit } from '@angular/core';
import { TemaService } from 'projects/ftc-biblioteca/angular-lib/src/services/tema.service';

@Component({
  selector: 'ftc-botao-tema',
  templateUrl: './botao-tema.component.html',
})
export class BotaoTemaComponent implements OnInit {
  public icone: string;

  constructor(private temaService: TemaService) {
    this.icone = this.temaService.pegarTema();
  }

  ngOnInit(): void {}

  public trocarTema(): string {
    return (this.icone = this.temaService.trocarTema());
  }
}

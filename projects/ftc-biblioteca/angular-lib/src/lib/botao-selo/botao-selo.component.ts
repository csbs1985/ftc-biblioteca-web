import { Component, OnInit } from '@angular/core';
import { GrupoEnum } from '../../enums/grupo.enum';

@Component({
  selector: 'ftc-botao-selo',
  templateUrl: './botao-selo.component.html',
})
export class BotaoSeloComponent implements OnInit {
  public selo: String = GrupoEnum.RETENCAO;
  public textoSelo!: string;

  constructor() {}

  ngOnInit(): void {
    this.pegarSelo();
  }

  private pegarSelo(): string {
    //TODO: criar função
    if (this.selo === GrupoEnum.B2B) return (this.textoSelo = '2B');
    if (this.selo === GrupoEnum.B2C) return (this.textoSelo = '2C');
    return (this.textoSelo = 'R');
  }

  public get GrupoEnum(): typeof GrupoEnum {
    return GrupoEnum;
  }
}

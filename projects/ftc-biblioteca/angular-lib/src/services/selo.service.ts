import { Injectable } from '@angular/core';
import { GrupoEnum } from '../public-api';

@Injectable({
  providedIn: 'root',
})
export class SeloService {
  public selo: String = GrupoEnum.RETENCAO;
  public textoSelo!: string;

  constructor() {}

  public pegarSelo(): string {
    //TODO: criar função
    if (this.selo === GrupoEnum.B2B) return (this.textoSelo = '2B');
    if (this.selo === GrupoEnum.B2C) return (this.textoSelo = '2C');
    return (this.textoSelo = 'R');
  }

  public get GrupoEnum(): typeof GrupoEnum {
    return GrupoEnum;
  }
}

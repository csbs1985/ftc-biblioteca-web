import { Injectable } from '@angular/core';
import { AplicativoEnum } from '../enums/aplicativo.enum';

@Injectable({
  providedIn: 'root',
})
export class IdentificarProjetoService {
  public aplicativoAtual!: AplicativoEnum;

  constructor() {}

  public identificar(): AplicativoEnum {
    var projetoAtual = 'retencao'; //TODO: criar função

    if (Object.values(AplicativoEnum).includes(projetoAtual as AplicativoEnum))
      this.aplicativoAtual = projetoAtual as AplicativoEnum;

    return this.aplicativoAtual;
  }
}

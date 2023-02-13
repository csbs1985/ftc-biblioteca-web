import { Injectable } from '@angular/core';
import { TemaEnum } from '../enums/tema.enum';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  public icon: string = TemaEnum.ESCURO;

  constructor() {}

  public trocarTema(): string {
    const tema = document.body.classList.toggle('tema-escuro');

    localStorage.setItem('tema_escuro', tema.toString());

    return tema ? (this.icon = TemaEnum.CLARO) : (this.icon = TemaEnum.ESCURO);
  }

  public pegarTema(): string {
    const temaEscuro = localStorage.getItem('tema_escuro') ?? false;

    if (temaEscuro === 'true') {
      document.body.classList.add('tema-escuro');
      return (this.icon = TemaEnum.CLARO);
    }

    document.body.classList.remove('tema-claro');
    return (this.icon = TemaEnum.ESCURO);
  }
}

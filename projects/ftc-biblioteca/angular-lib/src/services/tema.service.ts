import { Injectable } from '@angular/core';
import { TemaEnum } from '../enums/tema.enum';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  public icone: string = TemaEnum.ESCURO;

  constructor() {}

  public trocarTema(): string {
    const tema = document.body.classList.toggle('tema-escuro');

    localStorage.setItem('tema_escuro', tema.toString());

    return tema
      ? (this.icone = TemaEnum.CLARO)
      : (this.icone = TemaEnum.ESCURO);
  }

  public pegarTema(): string {
    const temaEscuro = localStorage.getItem('tema_escuro') ?? false;

    if (temaEscuro === 'true') {
      document.body.classList.add('tema-escuro');
      return (this.icone = TemaEnum.CLARO);
    }

    document.body.classList.remove('tema-claro');
    return (this.icone = TemaEnum.ESCURO);
  }
}

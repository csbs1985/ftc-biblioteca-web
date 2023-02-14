import { Injectable } from '@angular/core';
import { GrupoEnum } from '../public-api';

@Injectable({
  providedIn: 'root',
})
export class SairService {
  constructor() {}

  public sair() {
    this.limparlocalStorage();
    //TODO: criar função
  }

  public limparlocalStorage() {
    localStorage.removeItem('tema_escuro');
  }
}

import { Component, OnInit } from '@angular/core';
import { LogoEnum } from '../../enums/logo.enum';

@Component({
  selector: 'ftc-formulario-entrar',
  templateUrl: './formulario-entrar.component.html',
  styleUrls: ['./formulario-entrar.component.scss'],
})
export class FormularioEntrarComponent implements OnInit {
  public logo!: LogoEnum;

  constructor() {}

  ngOnInit(): void {
    this.identificarProjeto();
  }

  private identificarProjeto() {}

  public formularioEntrarCLique() {}

  public inputEmitterUsuario(valor: string): void {}

  public inputEmitterSenha(valor: string): void {}

  public get LogoEnum(): typeof LogoEnum {
    return LogoEnum;
  }
}

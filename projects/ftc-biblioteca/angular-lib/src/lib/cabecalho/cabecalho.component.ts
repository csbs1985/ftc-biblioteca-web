import { Component, OnInit } from '@angular/core';
import { AplicativoEnum } from '../../enums/aplicativo.enum';
import { LogoEnum } from '../../enums/logo.enum';

@Component({
  selector: 'ftc-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public aplicativoAtual!: AplicativoEnum;
  public logo!: LogoEnum;

  constructor() {}

  ngOnInit(): void {}

  public get LogoEnum(): typeof LogoEnum {
    return LogoEnum;
  }
}

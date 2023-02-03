import { Component, OnInit } from '@angular/core';
import { AplicativoEnum } from '../../enums/aplicativo.enum';
import { IdentificarProjetoService } from '../../services/identificar-projeto.service';
import { LogoEnum } from '../../enums/logo.enum';

@Component({
  selector: 'ftc-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public aplicativoAtual!: AplicativoEnum;
  public logo!: LogoEnum;

  constructor(private identificarProjetoService: IdentificarProjetoService) {}

  ngOnInit(): void {
    this.identificarProjeto();
  }

  private identificarProjeto() {
    this.aplicativoAtual = this.identificarProjetoService.identificar();
    this.pegarLogo();
  }

  private pegarLogo() {
    if (
      Object.values(LogoEnum).includes(
        this.aplicativoAtual.toString() as LogoEnum
      )
    )
      this.logo = this.aplicativoAtual.toString() as LogoEnum;
  }

  public get LogoEnum(): typeof LogoEnum {
    return LogoEnum;
  }
}

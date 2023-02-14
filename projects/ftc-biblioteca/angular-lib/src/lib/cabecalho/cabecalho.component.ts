import { Component, OnInit } from '@angular/core';
import { AplicativoEnum } from '../../enums/aplicativo.enum';
import { LogoEnum } from '../../enums/logo.enum';
import { TemaService } from '../../services/tema.service';
import { GrupoEnum } from '../../enums/grupo.enum';
import { SairService, SeloService } from '../../public-api';

@Component({
  selector: 'ftc-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public aplicativoAtual!: AplicativoEnum;
  public iconTheme: string;
  public logo!: LogoEnum;
  public selo: String = GrupoEnum.RETENCAO;
  public textoSelo!: string;

  constructor(
    private sairService: SairService,
    private seloService: SeloService,
    private temaService: TemaService
  ) {
    this.iconTheme = this.temaService.pegarTema();
    this.seloService.pegarSelo();
  }

  ngOnInit(): void {
    this.textoSelo = this.seloService.pegarSelo();
  }

  public trocarTema(): string {
    return (this.iconTheme = this.temaService.trocarTema());
  }

  public sair(): void {
    this.sairService.sair(); // TODO: criar serviço
  }

  public get LogoEnum(): typeof LogoEnum {
    return LogoEnum;
  }

  public get GrupoEnum(): typeof GrupoEnum {
    return GrupoEnum;
  }
}

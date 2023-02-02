import { Component, OnInit } from '@angular/core';
import { AplicativoEnum } from '../../enums/aplicativo.enum';
import { IdentificarProjetoService } from '../../services/identificar-projeto.service';

@Component({
  selector: 'ftc-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public aplicativoAtual!: AplicativoEnum;

  constructor(private identificarProjetoService: IdentificarProjetoService) {}

  ngOnInit(): void {
    this.identificarProjeto();
  }

  private identificarProjeto() {
    this.aplicativoAtual = this.identificarProjetoService.identificar();
  }
}

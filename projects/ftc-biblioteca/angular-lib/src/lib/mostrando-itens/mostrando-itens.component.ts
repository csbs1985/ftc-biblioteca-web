import { PaginacaoInterface } from './../../interfaces/paginacao.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ftc-mostrando-itens',
  templateUrl: './mostrando-itens.component.html',
  styleUrls: ['./mostrando-itens.component.scss'],
})
export class MostrandoItensComponent implements OnInit {
  @Input() mostrandoItensInput!: PaginacaoInterface;

  constructor() {}

  ngOnInit(): void {}
}

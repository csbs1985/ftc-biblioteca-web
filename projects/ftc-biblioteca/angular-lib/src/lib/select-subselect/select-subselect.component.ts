import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ftc-select-subselect',
  templateUrl: './select-subselect.component.html',
  styleUrls: ['./select-subselect.component.scss'],
})
export class SelectSubselectComponent implements OnInit {
  @Input() selectSubselectInput!: any;

  @Output() selectSubselectOutput = new EventEmitter();

  public subselect: any = [];
  public selectSelecionado: string = '';
  public subselectSelecinado = {
    texto: '',
    valor: '',
  };

  constructor() {}

  ngOnInit(): void {}

  public selecionarSelect(item: any): void {
    if (this.selectSelecionado === item.select) {
      this.selectSelecionado = '';
      this.subselect = [];
    } else {
      this.selectSelecionado = item.select;
      this.subselect = item.subselect;
    }
  }

  public selecionarSubselect(item: any): void {
    if (this.subselectSelecinado === item)
      this.subselectSelecinado = {
        texto: '',
        valor: '',
      };
    else this.subselectSelecinado = item;

    this.selectOutput();
  }

  public selectOutput(): void {
    this.selectSubselectOutput.emit({
      item: this.selectSelecionado,
      subitemTexto: this.subselectSelecinado.texto,
      subitemValor: this.subselectSelecinado.valor,
    });
  }
}

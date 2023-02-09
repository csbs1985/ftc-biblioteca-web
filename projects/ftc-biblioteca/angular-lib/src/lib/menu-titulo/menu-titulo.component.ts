import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectInterface } from 'projects/ftc-biblioteca/angular-lib/src/interfaces/select.interface';

@Component({
  selector: 'ftc-menu-titulo',
  templateUrl: './menu-titulo.component.html',
  styleUrls: ['./menu-titulo.component.scss'],
})
export class MenuTituloComponent implements OnInit {
  @Input() titulo!: string;
  @Input() menu: SelectInterface[] = [];

  @Output() menuTituloOutput = new EventEmitter<SelectInterface>();

  constructor() {}

  ngOnInit(): void {}

  public menuTituloSelecionar(selecionado: SelectInterface): void {
    this.menu.forEach((item) => (item.selecionado = false));

    this.menu.forEach((item) => {
      if (item.valor === selecionado.valor) item.selecionado = true;
    });

    this.menuTituloOutput.emit(selecionado);
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ftc-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss'],
})
export class BotaoComponent implements OnInit {
  @Input() texto: string = 'textoBotao';

  constructor() {}

  ngOnInit(): void {}
}

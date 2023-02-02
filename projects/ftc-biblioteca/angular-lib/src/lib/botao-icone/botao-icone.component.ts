import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ftc-botao-icone',
  templateUrl: './botao-icone.component.html',
  styleUrls: ['./botao-icone.component.scss'],
})
export class BotaoIconeComponent implements OnInit {
  @Input() icone: any;

  constructor() {}

  ngOnInit(): void {}
}

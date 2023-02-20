import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertaInterface } from '../../interfaces/alerta.interface';

@Component({
  selector: 'ftc-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss'],
})
export class AlertaComponent implements OnInit {
  @Input() alertaInput: AlertaInterface[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public selecionarAlerta(item: AlertaInterface) {
    this.router.navigate([item.url]);
    this.fecharAlerta(item);
  }

  public fecharAlerta(item: AlertaInterface) {
    this.alertaInput.forEach((alerta) => {
      if (alerta.texto === item.texto) alerta.lido = true;
    });
  }
}

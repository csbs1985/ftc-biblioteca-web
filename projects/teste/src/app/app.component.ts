import { Component } from '@angular/core';
import { TemaService } from 'projects/ftc-biblioteca/angular-lib/src/services/tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private temaService: TemaService) {
    this.temaService.pegarTema();
  }
}

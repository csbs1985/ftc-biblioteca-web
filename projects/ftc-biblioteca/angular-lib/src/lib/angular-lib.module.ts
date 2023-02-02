import { NgModule } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BotaoComponent } from './botao/botao.component';
import { BotaoIconeComponent } from './botao-icone/botao-icone.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CabecalhoComponent,
    BotaoComponent,
    BotaoIconeComponent,
    MenuComponent,
    LogoComponent,
  ],
  imports: [CommonModule],
  exports: [CabecalhoComponent],
})
export class AngularLibModule {}

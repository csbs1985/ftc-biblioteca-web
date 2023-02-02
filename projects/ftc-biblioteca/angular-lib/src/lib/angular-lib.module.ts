import { NgModule } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BotaoComponent } from './botao/botao.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';
import { BotaoSairComponent } from './botao-sair/botao-sair.component';
import { BotaoTemaComponent } from './botao-tema/botao-tema.component';
import { BotaoSeloComponent } from './botao-selo/botao-selo.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    BotaoComponent,
    MenuComponent,
    LogoComponent,
    BotaoSairComponent,
    BotaoTemaComponent,
    BotaoSeloComponent,
  ],
  imports: [CommonModule],
  exports: [CabecalhoComponent],
})
export class AngularLibModule {}

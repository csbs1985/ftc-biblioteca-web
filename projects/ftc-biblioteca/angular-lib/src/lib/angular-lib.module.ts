import { NgModule } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';
import { BotaoSairComponent } from './botao-sair/botao-sair.component';
import { BotaoTemaComponent } from './botao-tema/botao-tema.component';
import { BotaoSeloComponent } from './botao-selo/botao-selo.component';
import { InputComponent } from './input/input.component';
import { InputBotaoComponent } from './input-botao/input-botao.component';

@NgModule({
  declarations: [
    BotaoSairComponent,
    BotaoSeloComponent,
    BotaoTemaComponent,
    CabecalhoComponent,
    InputBotaoComponent,
    InputComponent,
    LogoComponent,
    MenuComponent,
  ],
  imports: [CommonModule],
  exports: [
    BotaoSairComponent,
    BotaoSeloComponent,
    BotaoTemaComponent,
    CabecalhoComponent,
    InputBotaoComponent,
    InputComponent,
    LogoComponent,
    MenuComponent,
  ],
})
export class AngularLibModule {}

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
import { SelectInlineComponent } from './select-inline/select-inline.component';
import { MultiselectInlineComponent } from './multiselect-inline/multiselect-inline.component';
import { FormularioEntrarComponent } from './formulario-entrar/formulario-entrar.component';
import { MenuTituloComponent } from './menu-titulo/menu-titulo.component';

@NgModule({
  declarations: [
    BotaoSairComponent,
    BotaoSeloComponent,
    BotaoTemaComponent,
    CabecalhoComponent,
    FormularioEntrarComponent,
    InputBotaoComponent,
    InputComponent,
    LogoComponent,
    MenuComponent,
    MenuTituloComponent,
    MultiselectInlineComponent,
    SelectInlineComponent,
  ],
  imports: [CommonModule],
  exports: [
    BotaoSairComponent,
    BotaoSeloComponent,
    BotaoTemaComponent,
    CabecalhoComponent,
    FormularioEntrarComponent,
    InputBotaoComponent,
    InputComponent,
    LogoComponent,
    MenuComponent,
    MenuTituloComponent,
    MultiselectInlineComponent,
    SelectInlineComponent,
  ],
})
export class AngularLibModule {}

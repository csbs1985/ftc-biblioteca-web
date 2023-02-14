import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { InputBotaoComponent } from './input-botao/input-botao.component';
import { SelectInlineComponent } from './select-inline/select-inline.component';
import { MultiselectInlineComponent } from './multiselect-inline/multiselect-inline.component';
import { FormularioEntrarComponent } from './formulario-entrar/formulario-entrar.component';
import { MenuTituloComponent } from './menu-titulo/menu-titulo.component';
import { TabelaComponent } from './tabela/tabela.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { MostrandoItensComponent } from './mostrando-itens/mostrando-itens.component';
import { PlacaComponent } from './placa/placa.component';
import { SelectSubselectComponent } from './select-subselect/select-subselect.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    FormularioEntrarComponent,
    InputBotaoComponent,
    LogoComponent,
    MenuComponent,
    MenuTituloComponent,
    MostrandoItensComponent,
    MultiselectInlineComponent,
    PaginacaoComponent,
    PlacaComponent,
    SelectInlineComponent,
    SelectSubselectComponent,
    TabelaComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CabecalhoComponent,
    FormularioEntrarComponent,
    InputBotaoComponent,
    LogoComponent,
    MenuComponent,
    MenuTituloComponent,
    MostrandoItensComponent,
    MultiselectInlineComponent,
    PaginacaoComponent,
    PlacaComponent,
    SelectInlineComponent,
    SelectSubselectComponent,
    TabelaComponent,
  ],
})
export class AngularLibModule {}

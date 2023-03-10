import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { InputBotaoComponent } from './input-botao/input-botao.component';
import { SelectInlineComponent } from './select-inline/select-inline.component';
import { FormularioEntrarComponent } from './formulario-entrar/formulario-entrar.component';
import { MenuTituloComponent } from './menu-titulo/menu-titulo.component';
import { TabelaComponent } from './tabela/tabela.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { MostrandoItensComponent } from './mostrando-itens/mostrando-itens.component';
import { PlacaComponent } from './placa/placa.component';
import { SelectSubselectComponent } from './select-subselect/select-subselect.component';
import { InputPeriodoComponent } from './input-periodo/input-periodo.component';
import { MenuFavoritoComponent } from './menu-favorito/menu-favorito.component';
import { RouterModule } from '@angular/router';
import { AlertaComponent } from './alerta/alerta.component';
import { NovidadesComponent } from './novidades/novidades.component';

@NgModule({
  declarations: [
    AlertaComponent,
    CabecalhoComponent,
    FormularioEntrarComponent,
    InputBotaoComponent,
    InputPeriodoComponent,
    LogoComponent,
    MenuComponent,
    MenuFavoritoComponent,
    MenuTituloComponent,
    MostrandoItensComponent,
    NovidadesComponent,
    PaginacaoComponent,
    PlacaComponent,
    SelectInlineComponent,
    SelectSubselectComponent,
    TabelaComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [
    AlertaComponent,
    CabecalhoComponent,
    FormularioEntrarComponent,
    InputBotaoComponent,
    InputPeriodoComponent,
    LogoComponent,
    MenuComponent,
    MenuFavoritoComponent,
    MenuTituloComponent,
    MostrandoItensComponent,
    NovidadesComponent,
    PaginacaoComponent,
    PlacaComponent,
    SelectInlineComponent,
    SelectSubselectComponent,
    TabelaComponent,
  ],
})
export class AngularLibModule {}

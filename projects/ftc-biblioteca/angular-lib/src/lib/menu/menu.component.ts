import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MenuInterface } from '../../interfaces/menu.interface';
import { SubmenuInterface } from '../../interfaces/submenu.interface';
import { FavoritoService } from '../../services/favorito.service';
import { VariavelService } from '../../services/variavel.service';
import { ClienteService } from '../../services/cliente.service';
import { ClienteInterface } from '../../interfaces/cliente.interface';

@Component({
  selector: 'ftc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() favorito: boolean = false;

  public clienteAtual!: ClienteInterface;
  public menu!: MenuInterface[];
  public menuSelecionado: string = '';

  constructor(
    private client: HttpClient,
    private clienteService: ClienteService,
    private favoritoService: FavoritoService,
    private router: Router,
    private variavelService: VariavelService
  ) {
    this.iniciarMenu();
  }

  ngOnInit(): void {}

  private iniciarMenu() {
    const mySub = this.client
      .get('assets/mocks/menu.json')
      .subscribe((result: any) => {
        this.menu = result.menu;
        mySub.unsubscribe();
      });
  }

  public mostrarMenu(menu: MenuInterface): boolean {
    if (!menu.atendimentoAtivo) return true;
    this.clienteService.clienteAtual.subscribe((x) => (this.clienteAtual = x));
    if (this.clienteAtual) return true;
    return true; //TODO: voltar ao false
  }

  public toggleFavorito(item: SubmenuInterface): void {
    this.favoritoService.toggleFavorito({ nome: item.nome, url: item.url });
  }

  public verificarFavorito(item: SubmenuInterface): boolean {
    return this.favoritoService.vefificarFavorito({
      nome: item.nome,
      url: item.url,
    })
      ? true
      : false;
  }

  public selecionarMenu(url: string): void {
    console.log(url);
    this.menuSelecionado = url;
    this.router.navigate([url]);
  }

  public ItemSelecionado(url: string): boolean {
    return this.menuSelecionado === url ? true : false;
  }
}

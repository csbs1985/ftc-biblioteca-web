import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { FavoritoInterface } from '../interfaces/favorito.interface';
import { NotificacaoService } from './notificacao.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {
  private favoritosSubject: BehaviorSubject<FavoritoInterface[]> =
    new BehaviorSubject<FavoritoInterface[]>([]);

  public favoritos: Observable<FavoritoInterface[]> =
    this.favoritosSubject.asObservable();

  readonly limiteFavoritos: number = 10;

  constructor(private notificacaoService: NotificacaoService) {}

  public pegarFavoritos(): Observable<FavoritoInterface[]> {
    return of(JSON.parse(localStorage.getItem('menu_favoritos')!)) ?? [];
  }

  public verificarFavorito(item: FavoritoInterface): boolean {
    var favoritos = JSON.parse(localStorage.getItem('menu_favoritos')!) ?? [];

    return favoritos.some(
      (element: FavoritoInterface) => element.url === item.url
    )
      ? true
      : false;
  }

  public toggleFavorito(item: FavoritoInterface) {
    var favoritos = JSON.parse(localStorage.getItem('menu_favoritos')!) ?? [];
    this.notificacaoService.isNotificacao = false;

    if (
      favoritos.some((element: FavoritoInterface) => element.url === item.url)
    ) {
      var index = favoritos.findIndex(
        (value: FavoritoInterface) => value.url === item.url
      );
      favoritos.splice(index, 1);
    } else {
      favoritos.length >= this.limiteFavoritos
        ? (this.notificacaoService.isNotificacao = true)
        : favoritos.push(item);
    }

    this.favoritosSubject.next(favoritos);
    localStorage.setItem('menu_favoritos', JSON.stringify(favoritos));
  }
}

import { Component, OnInit } from '@angular/core';
import { FavoritoInterface } from '../../interfaces/favorito.interface';
import { FavoritoService } from '../../services/favorito.service';

@Component({
  selector: 'ftc-menu-favorito',
  templateUrl: './menu-favorito.component.html',
  styleUrls: ['./menu-favorito.component.scss'],
})
export class MenuFavoritoComponent implements OnInit {
  public favoritos: FavoritoInterface[] = [];

  constructor(private favoritoService: FavoritoService) {}

  ngOnInit(): void {
    this.pegarFavoritos();
  }

  private pegarFavoritos(): void {
    this.favoritoService.pegarFavoritos().subscribe((favoritos) => {
      this.favoritos = favoritos ?? [];
    });
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFavoritoComponent } from './menu-favorito.component';

describe('MenuFavoritoComponent', () => {
  let component: MenuFavoritoComponent;
  let fixture: ComponentFixture<MenuFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFavoritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

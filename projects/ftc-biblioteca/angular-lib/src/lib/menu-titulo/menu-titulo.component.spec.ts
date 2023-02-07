import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTituloComponent } from './menu-titulo.component';

describe('MenuTituloComponent', () => {
  let component: MenuTituloComponent;
  let fixture: ComponentFixture<MenuTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoIconeComponent } from './botao-icone.component';

describe('BotaoIconeComponent', () => {
  let component: BotaoIconeComponent;
  let fixture: ComponentFixture<BotaoIconeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoIconeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoIconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

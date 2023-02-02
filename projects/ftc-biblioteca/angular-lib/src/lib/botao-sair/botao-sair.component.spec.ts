import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSairComponent } from './botao-sair.component';

describe('BotaoSairComponent', () => {
  let component: BotaoSairComponent;
  let fixture: ComponentFixture<BotaoSairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoSairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoSairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

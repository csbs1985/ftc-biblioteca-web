import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSeloComponent } from './botao-selo.component';

describe('BotaoSeloComponent', () => {
  let component: BotaoSeloComponent;
  let fixture: ComponentFixture<BotaoSeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoSeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoSeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

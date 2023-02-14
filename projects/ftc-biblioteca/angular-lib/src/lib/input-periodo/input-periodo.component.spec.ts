import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPeriodoComponent } from './input-periodo.component';

describe('InputPeriodoComponent', () => {
  let component: InputPeriodoComponent;
  let fixture: ComponentFixture<InputPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

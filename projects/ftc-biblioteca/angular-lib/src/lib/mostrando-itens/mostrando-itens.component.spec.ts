import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrandoItensComponent } from './mostrando-itens.component';

describe('MostrandoItensComponent', () => {
  let component: MostrandoItensComponent;
  let fixture: ComponentFixture<MostrandoItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrandoItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrandoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

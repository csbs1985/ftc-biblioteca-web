import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInlineComponent } from './select-inline.component';

describe('SelectInlineComponent', () => {
  let component: SelectInlineComponent;
  let fixture: ComponentFixture<SelectInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

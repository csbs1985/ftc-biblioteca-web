import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectInlineComponent } from './multiselect-inline.component';

describe('MultiselectInlineComponent', () => {
  let component: MultiselectInlineComponent;
  let fixture: ComponentFixture<MultiselectInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiselectInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

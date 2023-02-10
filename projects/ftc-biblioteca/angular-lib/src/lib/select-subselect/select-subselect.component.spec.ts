import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSubselectComponent } from './select-subselect.component';

describe('SelectSubselectComponent', () => {
  let component: SelectSubselectComponent;
  let fixture: ComponentFixture<SelectSubselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSubselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSubselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

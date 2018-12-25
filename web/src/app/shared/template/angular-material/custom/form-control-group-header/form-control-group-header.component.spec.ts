import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlGroupHeaderComponent } from './form-control-group-header.component';

describe('FormControlGroupHeaderComponent', () => {
  let component: FormControlGroupHeaderComponent;
  let fixture: ComponentFixture<FormControlGroupHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlGroupHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlGroupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMember', () => {
    expect(component).toBeTruthy();
  });
});

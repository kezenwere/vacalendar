import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDisplayHeaderComponent } from './field-display-header.component';

describe('FieldDisplayHeaderComponent', () => {
  let component: FieldDisplayHeaderComponent;
  let fixture: ComponentFixture<FieldDisplayHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDisplayHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDisplayHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

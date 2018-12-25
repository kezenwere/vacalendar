import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRendererDateComponent } from './grid-renderer-date.component';

describe('GridRendererDateComponent', () => {
  let component: GridRendererDateComponent;
  let fixture: ComponentFixture<GridRendererDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRendererDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRendererDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMember', () => {
    expect(component).toBeTruthy();
  });
});

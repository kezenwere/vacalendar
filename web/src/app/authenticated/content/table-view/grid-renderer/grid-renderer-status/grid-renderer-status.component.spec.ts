import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRendererStatusComponent } from './grid-renderer-status.component';

describe('GridRendererStatusComponent', () => {
  let component: GridRendererStatusComponent;
  let fixture: ComponentFixture<GridRendererStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRendererStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRendererStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMember', () => {
    expect(component).toBeTruthy();
  });
});

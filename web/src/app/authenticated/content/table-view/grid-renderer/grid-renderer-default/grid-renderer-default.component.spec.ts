import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRendererDefaultComponent } from './grid-renderer-default.component';

describe('GridRendererDefaultComponent', () => {
  let component: GridRendererDefaultComponent;
  let fixture: ComponentFixture<GridRendererDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRendererDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRendererDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMember', () => {
    expect(component).toBeTruthy();
  });
});

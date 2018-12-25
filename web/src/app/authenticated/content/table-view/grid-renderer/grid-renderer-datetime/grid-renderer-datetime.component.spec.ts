import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRendererDatetimeComponent } from './grid-renderer-datetime.component';

describe('GridRendererDatetimeComponent', () => {
  let component: GridRendererDatetimeComponent;
  let fixture: ComponentFixture<GridRendererDatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRendererDatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRendererDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

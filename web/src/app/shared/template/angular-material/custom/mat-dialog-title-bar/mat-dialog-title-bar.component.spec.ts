import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogTitleBarComponent } from './mat-dialog-title-bar.component';

describe('MatDialogTitleBarComponent', () => {
  let component: MatDialogTitleBarComponent;
  let fixture: ComponentFixture<MatDialogTitleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialogTitleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createMember', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, async, inject } from '@angular/core/testing';

import { ShouldLoginGuard } from './should-login.guard';

describe('ShouldLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShouldLoginGuard]
    });
  });

  it('should ...', inject([ShouldLoginGuard], (guard: ShouldLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});

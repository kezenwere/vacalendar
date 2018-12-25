import { TestBed, inject } from '@angular/core/testing';

import { AuthUtilService } from './auth-util.service';

describe('AuthUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthUtilService]
    });
  });

  it('should be created', inject([AuthUtilService], (service: AuthUtilService) => {
    expect(service).toBeTruthy();
  }));
});

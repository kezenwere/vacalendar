import { TestBed, inject } from '@angular/core/testing';

import { AppWideService } from './app-wide.service';

describe('AppWideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWideService]
    });
  });

  it('should be created', inject([AppWideService], (service: AppWideService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CustomCookieService } from './custom-cookie.service';

describe('CustomCookieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomCookieService]
    });
  });

  it('should be created', inject([CustomCookieService], (service: CustomCookieService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { AbstractHttpClientService } from './abstract-http-client.service';
import {ServerResponse} from './server-response';

describe('AbstractHttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractHttpClientService]
    });
  });

  it('should be created', inject([AbstractHttpClientService], (service: AbstractHttpClientService<ServerResponse>) => {
    expect(service).toBeTruthy();
  }));
});

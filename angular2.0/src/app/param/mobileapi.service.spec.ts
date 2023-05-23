import { TestBed } from '@angular/core/testing';

import { MobileapiService } from './mobileapi.service';

describe('MobileapiService', () => {
  let service: MobileapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

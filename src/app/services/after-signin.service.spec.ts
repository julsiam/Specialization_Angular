import { TestBed } from '@angular/core/testing';

import { AfterSigninService } from './after-signin.service';

describe('AfterSigninService', () => {
  let service: AfterSigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfterSigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

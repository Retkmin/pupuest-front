import { TestBed } from '@angular/core/testing';

import { TestingHelper } from '../_helpers/testing.spec';
import { HeaderService } from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;
  
  beforeEach(() => {
    TestingHelper.configureTest();
    service = TestBed.inject(HeaderService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

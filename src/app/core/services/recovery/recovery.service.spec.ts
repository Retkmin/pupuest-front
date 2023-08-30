import { TestBed } from '@angular/core/testing';
import { RecoveryService } from './recovery.service';
import { TestingHelper } from '../../helpers/testing.spec';

describe('RecoveryService', () => {
  let service: RecoveryService;
  
  beforeEach(() => {
    TestingHelper.configureTest();
    service = TestBed.inject(RecoveryService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

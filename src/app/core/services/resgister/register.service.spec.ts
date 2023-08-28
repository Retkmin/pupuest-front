import { TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';
import { TestingHelper } from '../../helpers/testing.spec';

describe('RegisterService', () => {
  let service: RegisterService;
  
  beforeEach(() => {
    TestingHelper.configureTest();
    service = TestBed.inject(RegisterService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

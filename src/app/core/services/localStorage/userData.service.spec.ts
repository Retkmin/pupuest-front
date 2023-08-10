import { TestBed } from '@angular/core/testing';
import { UserDataService } from './userData.service';
import { TestingHelper } from '../../helpers/testing.spec';

describe('MenuService', () => {
  let service: UserDataService;
  
  beforeEach(() => {
    TestingHelper.configureTest();
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

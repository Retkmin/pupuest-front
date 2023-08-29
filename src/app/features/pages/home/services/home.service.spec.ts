import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { TestingHelper } from 'src/app/core/helpers/testing.spec';

describe('HomeService', () => {
  let service: HomeService;
  
  beforeEach(() => {
    TestingHelper.configureTest();
    service = TestBed.inject(HomeService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

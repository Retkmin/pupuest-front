import { TestBed } from '@angular/core/testing';
import {  LocalStorageService } from './localStorage.service';
import { TestingHelper } from '../../helpers/testing.spec';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  
  beforeEach(() => {
    TestingHelper.configureTest();
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

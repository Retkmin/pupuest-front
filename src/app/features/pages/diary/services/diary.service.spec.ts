import { TestBed } from '@angular/core/testing';
import { TestingHelper } from 'src/app/core/helpers/testing.spec';
import { DiaryService } from './diary.service';

describe('DiaryService', () => {
  let service: DiaryService;
  
  beforeEach(() => {
    TestingHelper.configureTest();
    service = TestBed.inject(DiaryService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

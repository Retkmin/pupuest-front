import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiaryComponent } from './diary.component';
import { TestingHelper } from 'src/app/core/helpers/testing.spec';

describe('ProfileComponent', () => {
  let component: DiaryComponent;
  let fixture: ComponentFixture<DiaryComponent>;

  beforeEach(async() => {
    TestingHelper.configureTest()
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

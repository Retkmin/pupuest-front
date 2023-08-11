import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingHelper } from 'src/app/core/helpers/testing.spec';
import { OperativeComponent } from './operative.component';

describe('OperativeComponent', () => {
  let component: OperativeComponent;
  let fixture: ComponentFixture<OperativeComponent>;

  beforeEach(async() => {
    TestingHelper.configureTest()
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

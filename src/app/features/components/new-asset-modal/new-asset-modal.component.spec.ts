import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssetModalComponent } from './new-asset-modal.component';
import { TestingHelper } from 'src/app/core/helpers/testing.spec';

describe('NewAssetModalComponent', () => {
  let component: NewAssetModalComponent;
  let fixture: ComponentFixture<NewAssetModalComponent>;

  beforeEach(async() => {
    TestingHelper.configureTest()
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAssetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

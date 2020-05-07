import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUtilityComponent } from './common-utility.component';

describe('CommonUtilityComponent', () => {
  let component: CommonUtilityComponent;
  let fixture: ComponentFixture<CommonUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

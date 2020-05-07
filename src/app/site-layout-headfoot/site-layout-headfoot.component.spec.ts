import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutHeadfootComponent } from './site-layout-headfoot.component';

describe('SiteLayoutHeadfootComponent', () => {
  let component: SiteLayoutHeadfootComponent;
  let fixture: ComponentFixture<SiteLayoutHeadfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLayoutHeadfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutHeadfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

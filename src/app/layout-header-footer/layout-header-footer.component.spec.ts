import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderFooterComponent } from './layout-header-footer.component';

describe('LayoutHeaderFooterComponent', () => {
  let component: LayoutHeaderFooterComponent;
  let fixture: ComponentFixture<LayoutHeaderFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHeaderFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

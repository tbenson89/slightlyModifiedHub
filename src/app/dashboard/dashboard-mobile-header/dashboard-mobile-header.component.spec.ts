import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMobileHeaderComponent } from './dashboard-mobile-header.component';

describe('DashboardMobileHeaderComponent', () => {
  let component: DashboardMobileHeaderComponent;
  let fixture: ComponentFixture<DashboardMobileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMobileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMobileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDesktopHeaderComponent } from './dashboard-desktop-header.component';

describe('DashboardDesktopHeaderComponent', () => {
  let component: DashboardDesktopHeaderComponent;
  let fixture: ComponentFixture<DashboardDesktopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDesktopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDesktopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

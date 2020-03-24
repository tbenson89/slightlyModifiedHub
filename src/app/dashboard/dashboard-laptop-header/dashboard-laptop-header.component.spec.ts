import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLaptopHeaderComponent } from './dashboard-laptop-header.component';

describe('DashboardLaptopHeaderComponent', () => {
  let component: DashboardLaptopHeaderComponent;
  let fixture: ComponentFixture<DashboardLaptopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLaptopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLaptopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

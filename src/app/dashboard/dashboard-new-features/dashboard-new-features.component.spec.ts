import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewFeaturesComponent } from './dashboard-new-features.component';

describe('DashboardNewFeaturesComponent', () => {
  let component: DashboardNewFeaturesComponent;
  let fixture: ComponentFixture<DashboardNewFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFooterRowsComponent } from './mobile-footer-rows.component';

describe('MobileFooterRowsComponent', () => {
  let component: MobileFooterRowsComponent;
  let fixture: ComponentFixture<MobileFooterRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFooterRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFooterRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

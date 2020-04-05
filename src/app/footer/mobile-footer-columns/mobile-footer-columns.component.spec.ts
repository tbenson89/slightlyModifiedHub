import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFooterColumnsComponent } from './mobile-footer-columns.component';

describe('MobileFooterColumnsComponent', () => {
  let component: MobileFooterColumnsComponent;
  let fixture: ComponentFixture<MobileFooterColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFooterColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFooterColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

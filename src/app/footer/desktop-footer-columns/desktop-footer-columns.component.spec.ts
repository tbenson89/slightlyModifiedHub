import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopFooterColumnsComponent } from './desktop-footer-columns.component';

describe('DestopFooterColumnsComponent', () => {
  let component: DesktopFooterColumnsComponent;
  let fixture: ComponentFixture<DesktopFooterColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopFooterColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopFooterColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

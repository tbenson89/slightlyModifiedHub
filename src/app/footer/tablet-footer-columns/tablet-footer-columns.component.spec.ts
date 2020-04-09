import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletFooterColumnsComponent } from './tablet-footer-columns.component';

describe('TabletFooterColumnsComponent', () => {
  let component: TabletFooterColumnsComponent;
  let fixture: ComponentFixture<TabletFooterColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletFooterColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletFooterColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

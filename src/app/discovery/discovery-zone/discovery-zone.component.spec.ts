import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryZoneComponent } from './discovery-zone.component';

describe('DiscoveryZoneComponent', () => {
  let component: DiscoveryZoneComponent;
  let fixture: ComponentFixture<DiscoveryZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

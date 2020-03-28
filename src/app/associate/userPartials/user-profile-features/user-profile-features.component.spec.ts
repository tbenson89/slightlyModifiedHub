import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileFeaturesComponent } from './user-profile-features.component';

describe('UserProfileFeaturesComponent', () => {
  let component: UserProfileFeaturesComponent;
  let fixture: ComponentFixture<UserProfileFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

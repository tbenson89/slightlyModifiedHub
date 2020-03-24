import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCardsComponent } from './cat-cards.component';

describe('CatCardsComponent', () => {
  let component: CatCardsComponent;
  let fixture: ComponentFixture<CatCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

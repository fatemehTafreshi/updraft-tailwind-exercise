import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreaquntlyAskSectionComponent } from './freaquntly-ask-section.component';

describe('FreaquntlyAskSectionComponent', () => {
  let component: FreaquntlyAskSectionComponent;
  let fixture: ComponentFixture<FreaquntlyAskSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreaquntlyAskSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreaquntlyAskSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

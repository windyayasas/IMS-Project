import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeGivingComponent } from './prize-giving.component';

describe('PrizeGivingComponent', () => {
  let component: PrizeGivingComponent;
  let fixture: ComponentFixture<PrizeGivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizeGivingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
